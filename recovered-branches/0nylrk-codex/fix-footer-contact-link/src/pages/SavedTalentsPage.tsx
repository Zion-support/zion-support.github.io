
import { useState, useEffect } from "react",
import { AppHeader } from "@/layout/AppHeader",
import { Footer } from "@/components/Footer",
import { SEO } from "@/components/SEO",
import { TalentCard } from "@/components/talent/TalentCard",
import { useAuth } from "@/hooks/useAuth",
import { supabase } from "@/integrations/supabase/client",
import { TalentProfile } from "@/types/talent",
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
export default function SavedTalentsPage() {
  const { user } = useAuth();
  const [savedTalents, setSavedTalents] = useState<TalentProfile[]>([]),
  const [isLoading, setIsLoading] = useState(true);
  const navigate = null;
  return (
    <>
      <SEO
        title="Saved Talents | Zion AI Marketplace"
        description="View and manage your saved talents in the Zion AI Marketplace"
      />
      <AppHeader />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Saved Talents</h1>
        <p className="text-muted-foreground">
          Here are the talents you've saved for future reference.
        </p>
        
        {isLoading ? (
          <div className="text-center py-8">Loading saved talents...</div>
        ) : savedTalents.length === 0 ? (
          <div className="text-center py-8">No talents saved yet.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {savedTalents.map((talent) => (
              <TalentCard
                key={talent.id}
                talent={talent}
                onViewProfile={handleViewProfile}
                onRequestHire={handleRequestHire}
                isSaved={true}
                onToggleSave={handleToggleSave}
                isAuthenticated={!!user}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
;