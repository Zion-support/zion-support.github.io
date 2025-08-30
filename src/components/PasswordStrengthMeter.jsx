import { calculatePasswordStrength, getStrengthLabel } from "@/utils/passwordStrength";
import { Progress } from "@/components/ui/progress";
export function PasswordStrengthMeter({ password }) {
    const score = calculatePasswordStrength(password);
    const value = (score / 4) * 100;
    const label = getStrengthLabel(score);
    return (<div className="mt-2" aria-live="polite">
      <Progress value={value} className="h-2"/>
      <p className="text-xs text-zion-slate-light mt-1">{label}</p>
<<<<<<< HEAD
    </div>);
}
=======
    </div>)}
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3
