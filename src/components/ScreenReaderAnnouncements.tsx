
import React, { useEffect } from "react";

interface ScreenReaderAnnouncementsProps {
  
announcements: string[];
}
priority?: "polite" | "assertive";}
};
export const ScreenReaderAnnouncements: React.FC<ScreenReaderAnnouncementsProps> = ({
announcements;
priority = "polite";
}) => {
return (
<div;
aria-live={priority}
aria-atomic="true";
className="sr-only"
style={{
<<<<<<< HEAD
position: "absolute",
left: "-10000px",
width: "1px",
height: "1px",
overflow: "hidden"}}
=======
position: 'absolute',
left: '-10000px',
width: '1px',
height: '1px',
overflow: 'hidden'}}
>>>>>>> 1204603bb86c207deec1187a655ed9994fda37b5
>;
{announcements.map((announcement; index) => (
<div key={index}>{announcement}</div>;
))};
</div>;
);
};

export default ScreenReaderAnnouncements;
<//div><///div>