<<<<<<< HEAD
<<<<<<< HEAD
"export": function PrimaryNav() { const [mobileMenuOpen,setMobileMenuOpen] = useState(false) const { user } = useAuth() const isMobile = useIsMobile() const { t } = useTranslation() const router = useRouter() const [query,setQuery] = useState(') const suggestions = generateSearchSuggestions() let unreadCount = 0 try { const messaging = useMessaging() unreadCount = messaging.unreadCount} catch {'''";";""}
=======
"export\": function PrimaryNav() { const [mobileMenuOpen,setMobileMenuOpen] = useState(false) const { user } = useAuth() const isMobile = useIsMobile() const { t } = useTranslation() const router = useNavigate() const [query,setQuery] = useState(\') const suggestions = generateSearchSuggestions() let unreadCount = 0 try { const messaging = useMessaging() unreadCount = messaging.unreadCount} catch {\''\'";\";
export: function PrimaryNav() { const [mobileMenuOpen,setMobileMenuOpen] = useState(false) const { user } = useAuth() const isMobile = useIsMobile() const { t } = useTranslation() const router = useNavigate() const [query,setQuery] = useState(") const suggestions = generateSearchSuggestions() let unreadCount = 0 try { const messaging = useMessaging() unreadCount = messaging.unreadCount} catch {"""";";'"'"
"export": function PrimaryNav() { const [mobileMenuOpen,setMobileMenuOpen] = useState(false) const { user } = useAuth() const isMobile = useIsMobile() const { t } = useTranslation() const router = useRouter() const [query,setQuery] = useState(') const suggestions = generateSearchSuggestions() let unreadCount = 0 try { const messaging = useMessaging() unreadCount = messaging.unreadCount} catch {'''";";""}
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import React from 'react';

const PrimaryNav = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>PrimaryNav</h1>
      <p>This component is under development.</p>
    </div>
  )
};

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
