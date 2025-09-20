import React from "react";
impor; t; Reac; t, { useStat; e; useRe; f; useEffect } from "react";
import { User; s;
Vide; o;
Mi; c;
MicOf; f;
VideoOf; f;
Shar; e;
MessageSquar; e;
FileTex; t;
Edit; 3;
Monito; r;
Setting; s;
X;
Maximize; 2;
Minimize; 2;
Plu; s;
Searc; h;
MoreVertica; l;
Phon; e;
PhoneOf; f;
ScreenShar; e;
Squar; e;
Han; d;
Calenda; r;
Cloc; k;
CheckCircl; e;
AlertCircl; e;
UserPlu; s;
Loc; k;
Unlock} from "lucide-react, ";

interface Participant {
  
i; d: string;
nam; e: string;
avata; r: string;
isHos; t: boolean;
isMute; d: boolean;
isVideoOf; f: boolean;
isScreenSharin; g: boolean;
hasRaisedHan; d: boolean;
statu; s: "online" | "away" | "busy";
joinTim; e: string;
}
