<<<<<<< HEAD
}

}
import React from 'react',
import SEO from '../components / SEO',
export default /**
 * PressPage - Function description
 */
function PressPage() {
return (
  <>;
  <SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />;
  <div className="container mx - auto px - 4 py - 16">;
    <h1 className="text - 4xl font - bold mb - 4">Press</h1>;
    <p className="text - gray - 300">Media kit and announcements coming soon.</p>;
  </div>;
  </>);
}

import React from 'react';
import SEO from '../components/SEO';
export default function PressPage() {
	return (
		<>
			<SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Press</h1>
				<p className="text-gray-300">Media kit and announcements coming soon.</p>
			</div>
		</>
	)
}

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  ExternalLink, 
  FileText, 
  Globe, 
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
  TrendingUp
} from 'lucide-react';
import Layout from '../components/Layout';

const pressReleases = [
  {
    title: "Zion Tech Group Launches Revolutionary AI-Powered Drug Discovery Platform",
    date: "2025-01-15",
    summary: "New platform reduces drug discovery time by 50% and lowers R&D costs by 40%",
    category: "Product Launch",
    link: "#"
  },
  {
    title: "Company Expands Quantum Computing Infrastructure Services",
    date: "2025-01-10",
    summary: "Leading provider of quantum computing solutions announces new service offerings",
    category: "Service Expansion",
    link: "#"
  },
  {
    title: "Zion Tech Group Partners with Major Healthcare Organizations",
    date: "2025-01-05",
    summary: "Strategic partnerships to advance AI-powered healthcare solutions",
    category: "Partnership",
    link: "#"
  },
  {
    title: "Company Recognized as Top AI Services Provider",
    date: "2024-12-20",
    summary: "Industry recognition for excellence in AI and technology solutions",
    category: "Award",
    link: "#"
  }
];

const mediaKit = {
  logo: "/images/logo.png",
  pressPhotos: [
    { title: "CEO Headshot", url: "/images/ceo-headshot.jpg" },
    { title: "Team Photo", url: "/images/team-photo.jpg" },
    { title: "Office Building", url: "/images/office-building.jpg" }
  ],
  companyFacts: [
    "Founded in 2006",
    "235+ Services & Solutions",
    "3,200+ Projects Completed",
    "180+ Expert Team Members",
    "18+ Years Experience"
  ]
};

const contactInfo = {
  phone: "+1 302 464 0950",
  email: "kleber@ziontechgroup.com",
  address: "364 E Main St STE 1008 Middletown DE 19709"
};



}



import React from 'react';
import SEO from '../components/SEO';
export default function PressPage() {
	return (
		<>
			<SEO title="Press | Zion Tech Group" description="News, media resources, and press inquiries." canonical="/press" />
			<div className="container mx-auto px-4 py-16">
				<h1 className="text-4xl font-bold mb-4">Press</h1>
				<p className="text-gray-300">Media kit and announcements coming soon.</p>
			</div>
		</>
	)
}





  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;


=======
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-9f58
