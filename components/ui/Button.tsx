
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
