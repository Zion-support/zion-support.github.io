<<<<<<< HEAD
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }';"
import React from\';react\' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { \" navigate(\"/talent/${talent && talent.id}\") }\';\"
const React from";react" const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }";"""`"`
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }';"
=======
import React from 'react';

const TalentCard = ({ className }) => {
  return (
    <div className={className || ''}>
      <h1>TalentCard</h1>
      <p>This component is under development.</p>
    </div>
  );
};

export default TalentCard;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
