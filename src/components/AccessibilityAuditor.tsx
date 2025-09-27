import { useEffect } from "react";

interface AccessibilityIssue {
  type: "error" | "warning" | "info";
  message: string;
  element?: HTMLElement;
  rule?: string}

interface AccessibilityAuditorProps {
  onIssuesFound?: (issues: AccessibilityIssue[]) => void}

export default function AccessibilityAuditor({ onIssuesFound }: AccessibilityAuditorProps) {
  useEffect(() => {
    const checkAccessibility = () => {
      const issues: AccessibilityIssue[] = [];
      
      // Check for missing alt attributes
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        if (!img.getAttribute('alt')) {
          issues.push({
            type: 'error'
            message: 'Image missing alt attribute'
            element: img
            rule: 'img-alt'
          })}
      });
      
      // Check for missing form labels
      const inputs = document.querySelectorAll('input[type="text"] input[type="email"] input[type="password"]');
      inputs.forEach((input) => {
        const id = input.getAttribute('id');
        if (id && !document.querySelector(`label[for="${id}"]`)) {
          issues.push({
            type: 'warning'
            message: 'Input missing associated label'
            element: input as HTMLElement
            rule: 'label'
          })}
      });
      
      if (onIssuesFound) {
        onIssuesFound(issues)}
    };
    
    checkAccessibility()} [onIssuesFound]);
  
  return null}
