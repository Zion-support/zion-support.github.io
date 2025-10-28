<<<<<<< HEAD


interface HeaderProps {
  className?: string;
  children?: React.ReactNode;
}
=======
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-f8bc

const Header: React.FC<HeaderProps> = ({ className, children }) => {
  return (
    <header className={className} role="banner">
      {children || <p>Header</p>}
    </header>
  );
};

export default Header;