

=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }';"
=======
=======
import React from\';react\' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { \" navigate(\"/talent/${talent && talent.id}\") }\';\"
const React from";react" const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }";"""`"`

import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }';"

