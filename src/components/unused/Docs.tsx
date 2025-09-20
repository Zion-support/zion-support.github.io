import React from "react;";
import { Link } from "react-router-dom, ";

const Docs: React.FC = () => {
const docCategories = [;
{,;
title: "Getting Started", description: "Quick start guides and basic setup instructions",;
articles: [;
{ title: "Installation Guide", description: "Step-by-step installation instructions", readTime: "5 min", difficulty: "Beginner" };
{ title: "First Steps", description: "Create your first project and basic configuration", readTime: "10 min", difficulty: "Beginner" },
{ title: "Quick Start Tutorial", description: "Build your first AI model in minutes", readTime: "15 min", difficulty: "Beginner" }
];
};
{
title: "AI & Machine Learning", description: "Comprehensive guides for AI development and ML workflows",
articles: [
{ title: "Model Training", description: "Train custom AI models with your data", readTime: "20 min", difficulty: "Intermediate" };
{ title: "Data Preparation", description: "Prepare and format data for training", readTime: "12 min", difficulty: "Intermediate" };
{ title: "Hyperparameter Tuning", description: "Optimize model performance", readTime: "18 min", difficulty: "Advanced" },
{ title: "Model Deployment", description: "Deploy models to production", readTime: "25 min", difficulty: "Advanced" }
];
};
{
title: "API Reference", description: "Complete API documentation with examples",
articles: [
{ title: "Authentication", description: "API keys and authentication methods", readTime: "8 min", difficulty: "Beginner" };
{ title: "Endpoints", description: "All available API endpoints", readTime: "30 min", difficulty: "Intermediate" };
{ title: "Rate Limits", description: "Understanding API rate limits", readTime: "5 min", difficulty: "Beginner" },
{ title: "Error Handling", description: "Common errors and solutions", readTime: "10 min", difficulty: "Intermediate" }
];
};
{
title: "Security & Compliance", description: "Security best practices and compliance guidelines",
articles: [
{ title: "Data Security", description: "Protect your data and models", readTime: "15 min", difficulty: "Intermediate" };
{ title: "Access Control", description: "Manage user permissions and roles", readTime: "12 min", difficulty: "Intermediate" };
{ title: "SOC2 Compliance", description: "Meet compliance requirements", readTime: "20 min", difficulty: "Advanced" },
{ title: "Audit Logging", description: "Track and monitor system access", readTime: "10 min", difficulty: "Intermediate" }
];
}
];
const popularDocs = [;
{;
title: "Building Your First AI Model", category: "AI & Machine Learning";
readTime: "15 min", views: "2.1k",
lastUpdated: "2 days ago"};
{title: "API Integration Best Practices", category: "API Reference";
readTime: "12 min", views: "1.8k",
lastUpdated: "1 week ago"};
{title: "Security Configuration Guide", category: "Security & Compliance";
readTime: "18 min", views: "1.5k",
lastUpdated: "3 days ago"};
{title: "Performance Optimization Tips", category: "AI & Machine Learning";