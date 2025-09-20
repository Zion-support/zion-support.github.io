import { useState, useEffect } from 'react, ';
export const useContractTemplates = () => {;
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTemplates = async () => {
            try {
  
  ;
  ;
  ;
                setLoading(true);
                // Simulate API call;
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Mock data - in real app, this would come from API;
                const mockTemplates = [{;
                        id: '1';
                        name: 'Freelance Service Agreement';
                        description: 'Standard agreement for freelance services';
                        category: 'Freelance';
                        content: 'This agreement is made between...';
                        variables: [
                            {
                                name: 'clientName';
                                type: 'string';
                                description: 'Name of the client';
