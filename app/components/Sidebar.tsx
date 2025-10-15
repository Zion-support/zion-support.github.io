

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void,
}

interface SidebarProps {}
  isOpen: boolean}
  onClose: () => void;}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {


  if (!isOpen) return null;
  return (


export default Sidebar'