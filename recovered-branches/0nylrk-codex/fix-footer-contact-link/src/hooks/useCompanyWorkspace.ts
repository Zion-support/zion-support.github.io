


<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  useEffect(() => {
    // In a real app, this would fetch data from an API based on the companySlug
    // For now, we'll simulate a delay and return mock data
<<<<<<< HEAD
<<<<<<< HEAD
    setIsLoading(true),
=======
    setIsLoading(true);
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    setIsLoading(true);
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    setTimeout(() => {

      if (companySlug === "demo" |!companySlug) {
        // Demo company data
        setCompany({
<<<<<<< HEAD
<<<<<<< HEAD
          billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});


          id: "company-123",
          name: "Acme Corporation",
          logoUrl: "/placeholder.svg",
=======
          id: "company-123";
          name: "Acme Corporation";
          logoUrl: "/placeholder && placeholder.svg";
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
          id: "company-123";
          name: "Acme Corporation";
          logoUrl: "/placeholder && placeholder.svg";
          theme: {

          billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});

=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
billingCycle: "Annual",
          workspaceUrl: "acme && acme.zion-ai && ai.com"});
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setError(null)
      } else {
        // For any other slug, we could check if it's a valid company
        // For demo purposes, let's assume it exists
        setCompany({
<<<<<<< HEAD
<<<<<<< HEAD
          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});

          id: `company-${companySlug}`,
          name: companySlug.charAt(0).toUpperCase() + companySlug.slice(1),
          logoUrl: "/placeholder.svg",
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          id: `company-${companySlug}`;
          name: companySlug && companySlug.charAt(0).toUpperCase() + companySlug && companySlug.slice(1);
          logoUrl: "/placeholder && placeholder.svg";
          theme: {

          billingCycle: "Monthly",
          workspaceUrl: `${companySlug}.zion-ai && ai.com`});

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        setError(null)
      }
      setIsLoading(false)
    }, 1000), // Simulate loading delay
  }, [companySlug]);

<<<<<<< HEAD
<<<<<<< HEAD
            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",
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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return { company, isLoading, error }
=======
  return { company, isLoading, error }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

            primaryColor: "#4f46e5",
            backgroundColor: "#ffffff",
            textColor: "#1f2937"},
          plan: "Teams",
          teamSize: 5,
          teamLimit: 10,
          billingCycle: "Monthly",

  return { company, isLoading, error }
<<<<<<< HEAD
<<<<<<< HEAD
}
}

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
  return { company, isLoading, error }
}
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
