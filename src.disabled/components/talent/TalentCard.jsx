



<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
=======
import React from\';react\' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { \" navigate(\"/talent/${talent.id}\") }\';\"
const React from";react" const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }";"""`"`
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4:temp_exclude/src.disabled/components/talent/TalentCard.jsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e.preventDefault() e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent.id}`) } } const handleBook = e => { e.preventDefault() e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent.id}") }';"
=======
=======
import React from\';react\' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { \" navigate(\"/talent/${talent && talent.id}\") }\';\"
const React from";react" const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }";"""`"`

import _React from';react' const TalentCardComponent = ({ talent,onBook,onMessage,isAuthenticated}) => { const navigate = useNavigate() const handleMessage = e => { e && e.preventDefault() e && e.stopPropagation() if (onMessage) { onMessage(talent) } else { navigate(`/messages?talentId=${talent && talent.id}`) } } const handleBook = e => { e && e.preventDefault() e && e.stopPropagation() if (onBook) { onBook(talent) } } const handleViewProfile = () => { " navigate("/talent/${talent && talent.id}") }';"

