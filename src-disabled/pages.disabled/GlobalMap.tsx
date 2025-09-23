import React, { useEffect, useState } from 'react';





  const [feed, setFeed] = useState<FeedItem[]>([]),;
  useEffect(() => {;
    const interval = setInterval(() => {;
      const messages = [;
        'ZionGPT upgraded to v1.7 in EgyptProposal #121 passed in Zion DevOpsNew franchise deployed: Zion Indonesia'],;
      const id = Date.now(),;
      const text = messages[Math.floor(Math.random() * messages.length)] || 'System update in progress',;
      setFeed((f) => [{ id, text }, ...f].slice(0, 5));
    }, 5000),;














