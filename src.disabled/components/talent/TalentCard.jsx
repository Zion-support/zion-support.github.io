


=======
import React from\';react\' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { \" navigate(\"/talent/${talent.id}\") }\';\"
const React from";react" const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }";"""`"`>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }';"
=======
=======
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }';"

<<<<<<< HEAD
<<<<<<< HEAD
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }';"
==============
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
