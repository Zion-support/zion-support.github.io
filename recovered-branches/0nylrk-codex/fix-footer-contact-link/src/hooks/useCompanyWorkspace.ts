
<<<<<<< HEAD
import { useState, useEffect } from "react",
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {useState, useEffect} from "react";
import {Company} from "@/components/enterprise/workspace/CompanyDashboard";
export function useCompanyWorkspace(companySlug?: string) {;
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { useState, useEffect } from "react",
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
import { Company } from "@/components/enterprise/workspace/CompanyDashboard";
export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(null);
<<<<<<< HEAD
=======
=======
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",
export function useCompanyWorkspace(companySlug?: string) {
  const [company, setCompany] = useState<Company | null>(null),
  const [isLoading, setIsLoading] = useState(true),
  const [error, setError] = useState<string | null>(null),
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

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
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Business";
          teamSize: 12;
          teamLimit: 50;
          billingCycle: "Annual"
          workspaceUrl: "acme.zion-ai.com"});
        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
          id: `company-${companySlug}`;
          name: companySlug && companySlug.charAt(0).toUpperCase() + companySlug && companySlug.slice(1);
          logoUrl: "/placeholder && placeholder.svg";
          theme: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Teams";
          teamSize: 5;
          teamLimit: 10;
          billingCycle: "Monthly"
<<<<<<< HEAD
=======
=======
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
          workspaceUrl: `${companySlug}.zion-ai.com`});
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

  return { company, isLoading, error }
<<<<<<< HEAD
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
=======
=======
<<<<<<< HEAD
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
          workspaceUrl: `${companySlug}.zion-ai.com`}),
        setError(null)
import { useState, useEffect } from "react",;
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  return { company, isLoading, error }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
}