import { Sun, Moon, Monitor type Theme = 'dark' | 'light' | 'system';';
import { Sun, Moon, Monitor type Theme = 'dark' | 'light' | 'system';
';';
;
type Theme = 'dark' | 'light' | 'system';
;
interface ThemeToggleProps {;
  // Add your props here: any;
  className?: string
}';
';';
export const ThemeToggle: Reac t.FC<ThemeToggleProps> = ({ className = '' }) => {;';';  // Add your props "here": "any;
;
  className?: string;
"}
;
export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {;  useEffect(() => {