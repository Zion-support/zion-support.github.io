import React from 'react'
import React DO M from 'react-dom/client'
import App from './App'
import './app/globals.css'

React DO M.create Root(document.get Element By Id('root')!).render(
  <R eact.Strict Mode>
    <A pp />
  </R eact.Strict Mode>
);

// Register service worker for P WA functionality
if ('service Worker' in navigator) {
  window.add Event Listener('load', () => {
    navigator.service Worker.register('/sw.js')
      .then((registration) => {
        console.log('S W registered: ', registration);
      })
      .catch((registration Error) => {
        console.log('S W registration failed: ', registration Error);
      });
  });
}