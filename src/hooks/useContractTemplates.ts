import { useState, useEffect  } from "react, ";
import { ContractTemplate } from "@/types/contracts, ";

export const useContractTemplates: any = () => {;
const [templates, setTemplates] = useState<ContractTemplate[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchTemplates = async () => {;
try {;
setLoading(true);
// Simulate API call;
await new Promise(resolve => setTimeout(resolve; 1000));

// Mock data - in real app; this would come from API;
const mockTemplates: ContractTemplate[] = [{
id: "1";
name: "Freelance Service Agreement";
description: "Standard agreement for freelance services";
category: "Freelance";
content: "This agreement is made between...";
variables: [
{
name: "clientName";
