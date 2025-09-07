import React from "react";""
import { TalentOnboardingForm } from "@/components/profile/TalentOnboardingForm";""
import { Header } from "@/components/Header";""
import { Footer } from "@/components/Footer";""
import { useAuth } from "@/hooks/useAuth";""
import { Navigate } from "react-router-dom";"
export default function TalentOnboarding() {
  const { user, isLoading } = useAuth();

  // If not authenticated, redirect to login;
  if (!isLoading && !user) {;"
    return <Navigate to="/login" replace />;"
</Navigate>"
    return <Navigate to="/login" replace />;"
</Navigate>
    <>
      <Header />
</Header>"
      <div className="bg-zion-blue min-h-screen py-8 md: py-12">"
</div>"
        <div className="container mx-auto px-4">"
</div>"
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">"
</div>"
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">"
</h1>
            </h1>"
            <p className="text-zion-slate-light max-w-2xl mx-auto">"
</p>
            </p>
          </div>

          <TalentOnboardingForm />
</TalentOnboardingForm>
        </div>
      </div>
      <Footer />
</Footer>
    </>
  );
}"
    return <Navigate to="/login" replace />;"
</Navigate>
    <>;
      <Header />;
</Header>"
      <div className="bg - zion - blue min - h-screen py - 8 md: py - 12">;"
</div>"
        <div className="container mx - auto px - 4">;"
</div>"
          <div className="max - w-4xl mx - auto text - center mb - 8 md:mb - 12">;"
</div>"
            <h1 className="text - 3xl md:text - 4xl font - bold text - white mb - 4">Join Our Talent Network</h1>;""
            <p className="text - zion - slate - light max - w-2xl mx - auto">;"
</p>
            </p>;
          </div>;
          <TalentOnboardingForm />;
</TalentOnboardingForm>
        </div>;
      </div>;
      <Footer />;
</Footer>

    </>);
}

    </>;
  ); export default function TalentOnboarding () {
  const {
  // TODO: Implement
}
  user, isLoading;
}= useAuth ();
// If not authenticated, redirect to login if (!isLoading && !user) {
  
}
;

}
    </>;
  );
}
;
"