import React from 'react'; const TalentCardComponent = ({ talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate(); const handleMessage = e => { e.preventDefault(); e.stopPropagation(); if(onMessage) { onMessage(talent); } else { navigate(`/messages?talentId=${talent.id}`); } }; const handleBook = e => { e.preventDefault(); e.stopPropagation(); if(onBook) { onBook(talent); } }; const handleViewProfile = () => { ` navigate(`/talent/${talent.id}`); };
;
;
 const TalentCardComponent = memo(({ talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { ` navigate(`/talent/${talent.id}`) }';`'
<<<<<<< HEAD
 const TalentCardComponent = ({ talent, onBook, onMessage, isAuthenticated}) => {} const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const;const;const handleViewProfile = () => { ` navigate(`/talent/${talent.id}`) }';`
&apos;'
 const TalentCardComponent = ({ talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { ` navigate(`/talent/${talent.id}`) }';`'

"";
}`
 const TalentCardComponent = ({ talent, onBook, onMessage, isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { ` navigate(`/talent/${talent.id}`) }';`
=======
;
>>>>>>> 8b2501468f72f02648b06a2725c17d2465cef259
