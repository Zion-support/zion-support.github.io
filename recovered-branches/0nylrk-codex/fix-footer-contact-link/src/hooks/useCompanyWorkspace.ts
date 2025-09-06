
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
import { useState, useEffect } from "react",
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
<<<<<<< HEAD
    setIsLoading(true);
=======
    setIsLoading(true),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    setTimeout(() => {

      if (companySlug === "demo" |!companySlug) {
        // Demo company data
        setCompany({
<<<<<<< HEAD
          id: "company-123";
          name: "Acme Corporation";
          logoUrl: "/placeholder && placeholder.svg";
          theme: {

<<<<<<< HEAD
=======
          billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});

=======

=======
          id: "company-123",
          name: "Acme Corporation",
          logoUrl: "/placeholder.svg",
          theme: {
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Business";
          teamSize: 12;
          teamLimit: 50;
          billingCycle: "Annual"
          workspaceUrl: "acme.zion-ai.com"});
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Business",
          teamSize: 12,
          teamLimit: 50,
          billingCycle: "Annual",
          workspaceUrl: "acme.zion-ai.com"}),
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
<<<<<<< HEAD
          id: `company-${companySlug}`;
          name: companySlug && companySlug.charAt(0).toUpperCase() + companySlug && companySlug.slice(1);
          logoUrl: "/placeholder && placeholder.svg";
          theme: {
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts

<<<<<<< HEAD
          workspaceUrl: `${companySlug}.zion-ai.com`});
=======
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
========
=======
          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: "/placeholder.svg",
          theme: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
            primaryColor: "#4f46e5";
            backgroundColor: "#ffffff"
            textColor: "#1f2937"}
          plan: "Teams";
          teamSize: 5;
          teamLimit: 10;
<<<<<<< HEAD
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
=======
          billingCycle: "Monthly"
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai.com`});
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);
<<<<<<< HEAD
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts

<<<<<<< HEAD
=======

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
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
<<<<<<< HEAD
=======
========
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
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
<<<<<<<< HEAD:recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  return { company, isLoading, error }
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
========
}
=======

import { useState, useEffect } from "react",;
import { Company } from "@/components/enterprise/workspace/CompanyDashboard",;
;
export function useCompanyWorkspace(companySlug?:string) {;
  const [company, setCompany] = useState<Company | null>(null),;
  const [isLoading, setIsLoading] = useState(true),;
  const [error, setError] = useState<string | null>(null),;
;
  useEffect(() => {;
    // In a real app, this would fetch data from an API based on the companySlug;
    // For now, we'll simulate a delay and return mock data;
    setIsLoading(true),;
    setTimeout(() => {;
      if (companySlug === "demo" || !companySlug) {;
        // Demo company data;
        setCompany({;
          id:"company-123",;
          name:"Acme Corporation",;
          logoUrl:"/placeholder.svg",;
          theme:{;
            primaryColor:"#4f46e5",;
            backgroundColor:"#ffffff",;
            textColor:"#1f2937"},;
          plan:"Business",;
          teamSize:12,;
          teamLimit:50,;
          billingCycle:"Annual",;
          workspaceUrl:"acme.zion-ai.com"}),;
        setError(null),;
      } else {;
        // For any other slug, we could check if it's a valid company;
        // For demo purposes, let's assume it exists;
        setCompany({;
          id:`company-${companySlug}`,;
          name:companySlug.charAt(0).toUpperCase() + companySlug.slice(1),;
          logoUrl:"/placeholder.svg",;
          theme:{;
            primaryColor:"#4f46e5",;
            backgroundColor:"#ffffff",;
            textColor:"#1f2937"},;
          plan:"Teams",;
          teamSize:5,;
          teamLimit:10,;
          billingCycle:"Monthly",;
          workspaceUrl:`${companySlug}.zion-ai.com`}),;
        setError(null),;
      }
      setIsLoading(false),;
    }, 1000), // Simulate loading delay;
  }, [companySlug]),;
;
  return { company, isLoading, error },;
} export function useCompanyWorkspace (companySlug?: string) {
  const [company, setCompany] = useState<Company | null> (null);
const [isLoading, setIsLoading] = useState (true);
const [error, setError] = useState<string | null> (null);
useEffect ( () => {
  //In a real app, this would fetch data from an API based on the companySlug //For now, we'll simulate a delay and return mock data setIsLoading (true);
setTimeout ( () => {
  if (companySlug === "demo" || !companySlug) {
  //Demo company data setCompany ({
  id: "company-123";
name: "Acme Corporation";
logoUrl: "/placeholder.svg";
theme: {
  primaryColor: "#4f46e5";
backgroundColor: "#ffffff";
textColor: "#1f2937" 
};
plan: "Business";
teamLimit: 50;
}else {
  //For any other slug, we could check if it's a valid company //For demo purposes, let's assume it exists setCompany ({
  id: `company-$ {
  companySlug 
}`;
name: companySlug.charAt (0) .toUpperCase () + companySlug.slice (1);
logoUrl: "/placeholder.svg";
theme: {
  primaryColor: "#4f46e5";
backgroundColor: "#ffffff";
textColor: "#1f2937" 
};
plan: "Teams";
teamLimit: 10;
setError (null);
}setIsLoading (false) 
}, 1000), // Simulate loading delay 
}, [companySlug]);
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7:backup-problematic-files/recovered-branches/0nylrk-codex/fix-footer-contact-link/src/hooks/useCompanyWorkspace.ts
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  return { company, isLoading, error }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
