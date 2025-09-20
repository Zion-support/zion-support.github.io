import { Rocket, FileText, Users, Calendar, Eye, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
interface WizardStep {
title: string;
description: string;
icon: React.ReactNode;
action: {
text: string;,
url: string;
}
}
}
skipText?: string;
interface OnboardingWizardProps {
type: "client" | "talent";,
onComplete: () => void;,
onSkip: () => void;
className?: string;
: index < currentStep;
? "bg-zion-cyan";
}
: "bg-zion-blue-light"}
)}              />
))}
</div>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="bg-gradient-to-br from-zion-blue to-zion-purple/20 p-4 rounded-full mb-4">
{steps[currentStep]?.icon}
</div>
<h3 className="text-xl font-bold text-white mb-2">
{steps[currentStep]?.title}
</h3>
<p className="text-zion-slate-light mb-6">
{steps[currentStep]?.description}
</p>
</div>
</CardContent>
<CardFooter className="flex flex-col space-y-2">
<Button;
className="w-full bg-zion-purple hover:bg-zion-purple-light"
onClick={handleAction}        >
{steps[currentStep]?.action.text}
</Button>
{steps[currentStep]?.skipText && (
<Button;
variant="ghost"
className="text-zion-slate-light hover:text-white"
onClick={handleSkip}          >
{steps[currentStep]?.skipText}
</Button>
)}
</CardFooter>
</Card>
)
}