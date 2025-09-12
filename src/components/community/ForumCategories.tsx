import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone } from 'lucide-react'
import { ForumCategoryInfo } from "@/types/community";

const ForumCategories: React.FC = () => {
  return (
    <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-xl p-6 border border-zion-blue-light/30">
      <div className="text-center">
        <h3 className="text-xl font-semibold text-white mb-4">
          Forum Categories
        </h3>
        <p className="text-zion-slate-light">
          Coming soon - forum categories will be displayed here.
        </p>
      </div>
    </div>
  );
};

export default ForumCategories;
