

<<<<<<< HEAD

<<<<<<< HEAD
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import {useState, useEffect} from "react";
import {Company} from "@/components/enterprise/workspace/CompanyDashboard";
export function useCompanyWorkspace(companySlug?: string) {;
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
<<<<<<< HEAD
<<<<<<< HEAD
    setIsLoading(true);
=======
    setIsLoading(true),
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
    setIsLoading(true),
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
    setTimeout(() => {

      if (companySlug === "demo" |!companySlug) {
        // Demo company data
        setCompany({
<<<<<<< HEAD
<<<<<<< HEAD
          id: "company-123";
          name: "Acme Corporation";
          logoUrl: "/placeholder && placeholder.svg";
          theme: {

<<<<<<< HEAD
=======
=======
          billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});

=======

=======
          billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});


          id: "company-123",
          name: "Acme Corporation",
          logoUrl: "/placeholder.svg",
          theme: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Business";
          teamSize: 12;
          teamLimit: 50;
          billingCycle: "Annual"
          workspaceUrl: "acme.zion-ai.com"});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Business",
          teamSize: 12,
          teamLimit: 50,
          billingCycle: "Annual",
          workspaceUrl: "acme.zion-ai.com"}),
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
<<<<<<< HEAD
<<<<<<< HEAD
          id: `company-${companySlug}`;
          name: companySlug && companySlug.charAt(0).toUpperCase() + companySlug && companySlug.slice(1);
          logoUrl: "/placeholder && placeholder.svg";
          theme: {
<<<<<<< HEAD
=======

          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});

=======
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});

          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: "/placeholder.svg",
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
          theme: {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  const [error, setError] = useState<string | null>(null),        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({          theme: {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
        setError(null)
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

  return { company, isLoading, error }
import { useState, useEffect } from './react';
import { Company } from '@/components / enterprise / workspace / CompanyDashboard';
export /**
 * useCompanyWorkspace - Function description
 */
function useCompanyWorkspace() {
  const [company, set_company] = useState < Company | null>(null);
  const [is_loading, setIsLoading] = useState (true);
  const [error, set_error] = useState < string | null>(null);
;
  useEffect (() => {
    // In a real app, this would fetch data from an API based on the company_slug;
    // For now, we'll simulate a delay and return mock data;
    setIsLoading (true);
    set_timeout (() => {
      // Check condition
if ( {) {
  $2
}
        // Demo company data;
        set_company ({
          id: "company - 123";
          name: "Acme Corporation";
          logo_url: "/placeholder.svg";
          theme: {
            primary_color: "#4f46e5";
            background_color: "#ffffff",
            text_color: "#1f2937"}
          plan: "Business";
          team_size: 12;
          team_limit: 50;
          billing_cycle: "Annual",
          workspace_url: "acme.zion - ai.com"});
        set_error (null);
      } else {
        // For any other slug, we could check if it's a valid company;
        // For demo purposes, let's assume it exists;
        set_company ({
          id: `company-${company_slug}`;
          name: company_slug.char_at (0).toUpperCase () + company_slug.slice (1);
          logo_url: "/placeholder.svg";
          theme: {
            primary_color: "#4f46e5";
            background_color: "#ffffff",
            text_color: "#1f2937"}
          plan: "Teams";
          team_size: 5;
          team_limit: 10;
          billing_cycle: "Monthly",
          workspace_url: `${company_slug}.zion - ai.com`});
        set_error (null);
      }
      setIsLoading (false);
    }, 1000), // Simulate loading delay;
  }, [company_slug]);
;
  return { company, is_loading, error }

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai.com`});
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
  return { company, isLoading, error }
}import { useState, useEffect } from "react",;
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",;
export function useCompanyWorkspace(companySlug?: string) {;
  const [company, setCompany] = useState<Company | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
  useEffect(() => {;
    // In a real app, this would fetch data from an API based on the companySlug;
    // For now, we'll simulate a delay and return mock data;
    setIsLoading(true),;
    setTimeout(() => {;
      if (companySlug === "demo" || !companySlug) {;
        // Demo company data;
        setCompany({;
          id: "company-123",;
          name: "Acme Corporation",;
          logoUrl: "/placeholder.svg",;
          theme: {;
            primaryColor: "#4f46e5",;
            backgroundColor: "#ffffff",;
            textColor: "#1f2937"},;
          plan: "Business",;
          teamSize: 12,;
          teamLimit: 50,;
          billingCycle: "Annual",;
          workspaceUrl: "acme.zion-ai.com"}),;
        setError(null);
      } else {;
        // For any other slug, we could check if it's a valid company;
        // For demo purposes, let's assume it exists;
        setCompany({;
          id: `company-${companySlug}`,;
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),;
          logoUrl: "/placeholder.svg",;
          theme: {;
            primaryColor: "#4f46e5",;
            backgroundColor: "#ffffff",;
            textColor: "#1f2937"},;
          plan: "Teams",;
          teamSize: 5,;
          teamLimit: 10,;
          billingCycle: "Monthly",;
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null);
      }
      setIsLoading(false);
    }, 1000), // Simulate loading delay;
  }, [companySlug]);

  return { company, isLoading, error }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df