
import {useState, useEffect} from "react";
import {Company} from "@/components/enterprise/workspace/CompanyDashboard";
export function useCompanyWorkspace(companySlug?: string) {;
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
import { useState, useEffect } from "react",
import { Company } from "@/components/enterprise/workspace/CompanyDashboard";
export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",
export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
    setIsLoading(true);
    setTimeout(() => {

      if (companySlug === "demo" |!companySlug) {
        // Demo company data
        setCompany({
          id: "company-123";
          name: "Acme Corporation";
          logoUrl: "/placeholder && placeholder.svg";
          theme: {

=======
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Business";
          teamSize: 12;
          teamLimit: 50;
          billingCycle: "Annual"
          workspaceUrl: "acme.zion-ai.com"});
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Business",
          teamSize: 12,
          teamLimit: 50,
          billingCycle: "Annual",
          workspaceUrl: "acme.zion-ai.com"}),
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
          id: `company-${companySlug}`;
          name: companySlug && companySlug.charAt(0).toUpperCase() + companySlug && companySlug.slice(1);
          logoUrl: "/placeholder && placeholder.svg";
          theme: {
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Teams";
          teamSize: 5;
          teamLimit: 10;
          billingCycle: "Monthly"
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  return { company, isLoading, error }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}