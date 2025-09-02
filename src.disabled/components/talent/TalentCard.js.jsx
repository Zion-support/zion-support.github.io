
"const TalentCardComponent = ({"; talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate(); const handleMessage = e => {; e.preventDefault(); e.stopPropagation(); if (onMessage) { onMessage(talent); } else { router(`/messages?talentId=${talent.id}`);` } }; const handleBook = e => {; ";"""`";

"const TalentCardComponent = ({"; talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate(); const handleMessage = e => {; e.preventDefault(); e.stopPropagation(); if(onMessage) { onMessage(talent); } else { router(`/messages?talentId=${talent.id}`);` } }; const handleBook = e => {; ";"
>>>>>>> origin/cursor/website-audit-content-update-and-deployment-23ff
