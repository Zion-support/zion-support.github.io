import { useState, useEffect } from 'react, ';
export const useContractTemplates = () => {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                setLoading(true);
                // Simulate API call;
                await new Promise(resolve => setTimeout(resolve, 1000));
                // Mock data - in real app, this would come from API;
                const mockTemplates = [{
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
<<<<<<< HEAD
                                required: true;},
=======
                                required: true;
                            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                            {
                                name: 'serviceDescription';
                                type: 'string';
                                description: 'Description of services to be provided';
<<<<<<< HEAD
                                required: true;},
=======
                                required: true;
                            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                            {
                                name: 'rate';
                                type: 'number';
                                description: 'Hourly rate for services';
<<<<<<< HEAD
                                required: true;},
                        ],
=======
                                required: true;
                            }],
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                        isPublic: true;
                        createdAt: '2024-01-01T00:00:00Z';
                        updatedAt: '2024-01-01T00:00:00Z';
                        authorId: 'admin';
                        authorName: 'Admin';
                        usageCount: 1250;
                        rating: 4.8;
                        tags: ['freelance', 'agreement', 'services']},
                    {
                        id: '2';
                        name: 'Non-Disclosure Agreement';
                        description: 'Confidentiality agreement template';
                        category: 'Legal';
                        content: 'This Non-Disclosure Agreement...';
                        variables: [{
                                name: 'companyName';
                                type: 'string';
                                description: 'Name of the company';
<<<<<<< HEAD
                                required: true;},
=======
                                required: true;
                            },
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                            {
                                name: 'confidentialityPeriod';
                                type: 'number';
                                description: 'Period of confidentiality in years';
                                required: true;
<<<<<<< HEAD
                                defaultValue: 2;},
                        ],
=======
                                defaultValue: 2;
                            }],
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
                        isPublic: true;
                        createdAt: '2024-01-01T00:00:00Z';
                        updatedAt: '2024-01-01T00:00:00Z';
                        authorId: 'admin';
                        authorName: 'Admin';
                        usageCount: 890;
                        rating: 4.6;
                        tags: ['nda', 'confidentiality', 'legal']},
                ];
                setTemplates(mockTemplates);
                setError(null);
            }
            catch (err) {
                setError('Failed to fetch contract templates');
            }
            finally {
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);
    const getTemplateById = (id) => {
        return templates.find(template => template.id === id);
    };
    const getTemplatesByCategory = (category) => {
        return templates.filter(template => template.category === category);
    };
    const searchTemplates = (query) => {
        const lowercaseQuery = query.toLowerCase();
        return templates.filter(template => template.name.toLowerCase().includes(lowercaseQuery) ||
            template.description.toLowerCase().includes(lowercaseQuery) ||
            template.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)));
    };
    return {templates,
        loading,
        error,
        getTemplateById,
        getTemplatesByCategory,
        searchTemplates};
};
