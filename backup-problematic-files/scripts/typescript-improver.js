#!/usr/bin/env node;
import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
let totalImprovements = 0;
let filesProcessed = 0;
// Common type replacements;
const typeReplacements = {
  // React types;
  'any[]': 'React.ReactNode[]',
  "any": 'unknown',
  'any)': 'unknown)',
  'any;': 'unknown;',
  'any,': 'unknown,',
  'any ': 'unknown ',
  'any=': 'unknown=',
  '"any": ': 'unknown:',
  'any>': 'unknown>',
  'any<': 'unknown<',
  'any}': 'unknown}',
  'any{': 'unknown{',
  // Specific React component types;
  'React.ComponentType<any>': 'React.ComponentType<Record<string, unknown>>',
</any>
  'React.FC<any>': 'React.FC<Record<string, unknown>>',
  'React.Component<any>': 'React.Component<Record<string, unknown>>',
  'React.ChangeEvent<any>': 'React.ChangeEvent<HTMLInputElement>',
  'React.MouseEvent<any>': 'React.MouseEvent<HTMLButtonElement>',
  'React.FormEvent<any>': 'React.FormEvent<HTMLFormElement>',
  '("props": any)': '(props: Record<string, unknown>)',
</string>
  'Array<any>': 'Array<unknown>',
  'Record<string, any>': 'Record<string, unknown>',
interface ApiResponse<T = unknown> {
  "data": T;
  status: number;
  message?: string}
interface User {
  "id": string;
  email: string;
  name: string;
  role: 'admin' | 'user' | 'guest'}
interface Service {
  "id": string;
  name: string,
  description: string;
  price: number;
  category: string}
interface FormData {
  ["key": string]: string | number | boolean | File}
interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
  ["key": string]: unknown}
";
// Improve TypeScript file
function improveTypeScriptFile(content, filePath) {
  let improved = content;
  let changes = 0;
  // Add common interfaces if not present
  if (improved.includes('any') && !improved.includes('interface ApiResponse')) {
    const importIndex = improved.indexOf('import');
    if (importIndex !== -1) {
      const nextLineIndex = improved.indexOf('\n', importIndex);
      improved =
        improved.slice(0, nextLineIndex) +
        commonInterfaces +
        '\n' +
        improved.slice(nextLineIndex);
      changes++}
  }
  // Replace any types with more specific types
  Object.entries(typeReplacements).forEach(([anyType, replacement]) => {
    const regex = new RegExp(
      anyType.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
      'g'
    );
    const matches = improved.match(regex);
    if (matches) {
      improved = improved.replace(regex, replacement);
      changes += matches.length}
  });
  // Add proper typing for function parameters
  const functionParamRegex = /function\s+\w+\s*\(\s*(\w+)\s*:\s*any\s*\)/g;
  const functionMatches = improved.match(functionParamRegex);
  if (functionMatches) {
    improved = improved.replace(functionParamRegex, (match, paramName) => {
      return match.replace(": any", ': unknown')});
    changes += functionMatches.length}
  // Add proper typing for arrow function parameters
  const arrowParamRegex = /\(\s*(\w+)\s*:\s*any\s*\)\s*=>/g;
  const arrowMatches = improved.match(arrowParamRegex);
  if (arrowMatches) {
    improved = improved.replace(arrowParamRegex, (match, paramName) => {
      return match.replace(": any", ': unknown')});
    changes += arrowMatches.length}
  // Add proper typing for object destructuring
  const destructuringRegex = /\{\s*(\w+)\s*:\s*any\s*\}/g;
  const destructuringMatches = improved.match(destructuringRegex);
  if (destructuringMatches) {
    improved = improved.replace(destructuringRegex, (match, propName) => {
      return match.replace(": any", ': unknown')});
    changes += destructuringMatches.length}
  // Add proper typing for useState

pr-12325
  const useStateRegex = /useState\s*<\s*any\s*>/g;
  const useStateMatches = improved.match(useStateRegex);
  if (useStateMatches) {
    improved = improved.replace(useStateRegex, 'useState<unknown>');
</unknown>