

      <Header />"
      <div className="min-h-screen bg-zion-blue py-12 px-4">"
        <div className="container mx-auto">"
          <div className="text-center mb-12">
            <GradientHeading>AI Matchmaker</GradientHeading>"
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Describe your needs and our AI will match you with the perfect;
              services, talents, or equipment.
            </p>
          </div>




import { useState } from './react';
import { use_navigate } from './react-router-dom';
import { Header } from '@/components / Header';
import { Footer } from '@/components / Footer';
import { GradientHeading } from '@/components / GradientHeading';
import { AIMatchmaker } from '@/components / AIMatchmaker';
import { Select, SelectValue, SelectTrigger, SelectContent, SelectItem } from '@/components / ui / select';
import { toast } from '@/hooks / use - toast';
import { MatchResult } from '@/lib / ai - matchmaking';
export default /**
 * AIMatcherPage - Function description
 */
function AIMatcherPage() {
  const navigate = use_navigate ();
  const [selected_category, setSelectedCategory] = useState < string>("all");
;
  const handleMatchSelect = (match: MatchResult) =>: any {
    // Get the item type from the category;
    let item_type = "service";
    const category = match.item.category.toLowerCase (),
    // Check condition
if (|| category === "engineering" ||) {
  $2



            />;

      <Footer />;





