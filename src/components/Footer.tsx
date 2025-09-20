<<<<<<< HEAD
return (,
<div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">,
<h3 className="text-xl font-bold mb-4">Footer</h3>,
<p className="text-gray-300">Revolutionary technology component</p>,
</div>,
<//div><///div>)
import React from 'react';
import { FooterNewsletter,  } from "@/components/FooterNewsletter";
import { Twitter,, Linkedin,, Facebook,, Instagram,, Github, ChevronUp,  } from 'lucide-react';
import Link from "next/link";
import { FeedbackWidget,  } from "@/components/feedback/FeedbackWidget";

function resolveUrl(envVar: string | undefined, fallback: string) {
  if (!envVar || envVar.trim() === "" || envVar === "undefined") {
    return fallback;
  }
  return envVar;
}
=======
import React from "react";
>>>>>>> pr-22703

export function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </footer>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> pr-22703
