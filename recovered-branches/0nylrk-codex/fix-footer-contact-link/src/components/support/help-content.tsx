

import React from "react",
import { HelpCategory } from "./types",
import { 
  HelpCircle,
  CreditCard, 
  Users, 
  Calendar, 
  Briefcase 
} from "lucide-react",

export const HELP_CATEGORIES: HelpCategory[] = [
  {
    id: "getting-started"
    name: "Getting Started"
    description: "Learn the basics of using the Zion AI Marketplace"
    icon: <HelpCircle className="h-6 w-6 text-zion-purple" />
    articles: [
      {
      {
        id: "complete-profile"
        title: "Completing your profile"
        content: "A complete profile helps you get the most out of Zion AI Marketplace. Follow these steps to set up your profile:\n\n1. Navigate to the Profile section from your dashboard\n2. Upload a professional profile picture\n3. Add your basic information including location and contact details\n4. Write a compelling bio that highlights your expertise or requirements\n5. For talent users: Add your skills, experience, and portfolio items\n6. For client users: Add information about your company or projects\n\nA complete profile increases your visibility on the platform and helps our AI matching system connect you with the right opportunities or talent."
        lastUpdated: "2023-11-18"
        tags: ["profile", "setup"]
      {
        id: "platform-navigation"
        title: "Navigating the platform"
        content: "The Zion AI Marketplace platform is designed to be intuitive and easy to navigate. Here's a quick overview of the main sections:\n\n Home: Your personalized dashboard with recommended matches\n Marketplace: Browse all available services and talent\n Jobs: View open positions or post new job opportunities\n Messages: Communicate with clients, talent, or support\n Profile: Manage your personal or company information\n Settings: Configure your account preferences and security options\n\nUse the search bar at the top of any page to quickly find specific services, talent, or content. The navigation menu adapts based on your account type to show the most relevant options.";
        lastUpdated: "2023-12-01"
        tags: ["navigation", "interface"]
      }
    ]
  {
    id: "hiring"
    name: "Hiring Process"
    description: "How to find and hire talent on the platform"
    icon: <Briefcase className="h-6 w-6 text-zion-cyan" />
    articles: [
      {
        id: "post-job",
        title: "Posting a job",
        content: "Posting a job on Zion AI Marketplace is quick and straightforward. Follow these steps to create an effective job posting:\n\n1. Click on the 'Post a Job' button from your dashboard\n2. Fill in the job title, category, and required skills\n3. Write a detailed description of the project or position\n4. Specify your budget range and timeline\n5. Add any specific requirements or qualifications\n6. Review and publish your listing\n\nFor best results, be as specific as possible about your requirements and expectations. Our AI matching system will use this information to connect you with the most qualified talent.",
        lastUpdated: "2023-10-25",
        tags: ["job", "hiring", "recruitment"]
      },
      {
        id: "ai-matching",
        title: "Using AI matching",
        content: "Zion's AI matching system is designed to connect you with the perfect talent for your needs. Here's how to make the most of this feature:\n\n1. Ensure your job posting is detailed and specific\n2. Navigate to the 'AI Matcher' section from your dashboard\n3. Review the automatically generated list of compatible talent\n4. Use filters to refine your search based on skills, experience, or availability\n5. Click on profiles to view detailed information about each candidate\n6. Save promising matches for future reference or reach out directly\n\nOur AI system considers not just skills and experience, but also work style compatibility, communication preferences, and past project success to suggest optimal matches.",
        lastUpdated: "2023-11-05",
        tags: ["ai", "matching", "recruitment"]
      },
      {
        id: "interview-scheduling",
        title: "Scheduling interviews",
        content: "Once you've identified potential talent for your project, scheduling interviews is the next step. Follow this process:\n\n1. From a talent profile, click the 'Schedule Interview' button\n2. Select your preferred date and time from the available slots\n3. Choose between video call, voice call, or text chat\n4. Add any specific topics you'd like to discuss\n5. Send the interview request\n\nThe talent will receive a notification and can confirm the interview or suggest alternative times. All interviews take place through our secure platform, with automatic recording and transcription available for future reference (with consent from both parties).",
        lastUpdated: "2023-11-20",
        tags: ["interview", "hiring", "scheduling"]
      },
      {
        id: "making-offer",
        title: "Making an offer",
        content: "After finding the right talent for your project, it's time to make an offer. Here's how to do it effectively:\n\n1. Navigate to the talent's profile\n2. Click the 'Make Offer' button\n3. Select the project type (fixed price or hourly)\n4. Define the scope of work clearly\n5. Specify the budget and timeline\n6. Set any milestones for payment\n7. Add any specific terms or requirements\n8. Review and send your offer\n\nThe talent will receive your offer and can accept, decline, or negotiate terms. Once both parties agree, our system will generate a simple contract to protect both sides.",
        lastUpdated: "2023-12-05",
        tags: ["offer", "contract", "negotiation"]
      }
      }
    ];

        id: "file-dispute",
        title: "How to file a dispute",
        content: "If you encounter issues with a contract or project, you can use our dispute resolution system. Here's how to file a dispute:\n\n1. Navigate to the project in question from your dashboard\n2. Click the 'Issues' tab and select 'File a Dispute'\n3. Select the dispute category (payment, deliverables, communication, etc.)\n4. Provide a clear description of the issue\n5. Attach any relevant evidence (messages, deliverables, contract details)\n6. Submit your dispute\n\nOnce submitted, the other party will be notified and given 72 hours to respond. Our support team will be automatically notified of all disputes filed.",
        lastUpdated: "2023-11-05",
        tags: ["dispute", "resolution", "conflict"]
      },
      {
        id: "mediation-process",
        title: "The mediation process",
        content: "When disputes can't be resolved directly between parties, our mediation process helps find a fair solution. Here's how mediation works:\n\n1. After a dispute is filed, both parties have 72 hours to attempt direct resolution\n2. If unresolved, a mediator from our support team is assigned to the case\n3. The mediator reviews all details and evidence from both sides\n4. A mediation call is scheduled with all parties (optional but recommended)\n5. The mediator proposes a resolution based on contract terms and platform policies\n6. Both parties can accept the proposed resolution or request escalation\n\nMost disputes are successfully resolved during mediation, avoiding the need for further escalation.",
        lastUpdated: "2023-11-18",
        tags: ["mediation", "dispute", "resolution"]
      },
      {
        id: "dispute-prevention",
        title: "Tips for preventing disputes",
  }
];

;

