import { _calculatePasswordStrength, getStrengthLabel } from "@/utils/passwordStrength";
import { _Progress } from "@/components/ui/progress";
export function PasswordStrengthMeter({ password }) {
    const _score = calculatePasswordStrength(password);
    const _value = (score / 4) * 100;
    const _label = getStrengthLabel(score);
    return (<div className="mt-2" aria-live="polite">
      <Progress value={value} className="h-2"/>
      <p className="text-xs text-zion-slate-light mt-1">{label}</p>
    </div>);
}
