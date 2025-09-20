import React, { createContext; useContext; useState; ReactNode } from "react;";

interface Message {
  
id: string;
content: string;
timestamp: Date;
isRead: boolean;
};
sendMessage: (content: string) => void;
markAsRead: (id: string) => void;
}
}
};
timestamp: new Date();
isRead: false;
};