 import Header from '../Header';
import Footer from './Footer';
import SEOHead from '../SEOHead';
interface MainLayoutProps {
  children: ReactNode;
title?: string;
description?: string;
}const MainLayout: React.FC<MainLayoutProps> = ({
  children, title, description;
}) => {
  return (<> <SEOHead title= {
  title 
}description= {
  description 
}/> <div className="min-h-screen flex flex-col"> <Header /> <main className="flex-1"> {
  children 
}</main> <Footer /> </div> </>);
};
export default MainLayout;
children 
};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-28da 