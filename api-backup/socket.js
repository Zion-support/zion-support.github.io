<<<<<<< HEAD
import React from 'react';
export const config = { api: { bodyParser: false } };
export default function handler(_req, res) {
  const httpServer = res.socket.server;
  if (!httpServer.io) {
    const io = new IOServer(httpServer, { path: '/api/socket' });
    httpServer.io = io;
    io.on('connection', socket => {
      socket.on('join-room', roomId => {
        socket.join(roomId);
      });
      socket.on('send-message', ({ roomId, message }) => {
        socket.to(roomId).emit('receive-message', message);
      });
    });
  }
  res.end();
}
=======
import React from "react"; export const config = { api: { bodyParser: false } }; export default function handler(_req, res) { const httpServer = res.socket.server; if (!httpServer.io) { const io = new IOServer(httpServer, { path: "/api/socket" }); httpServer.io = io; io.on("connection", (socket) => { socket.on("join-room", (roomId) => { socket.join(roomId); }); socket.on("send-message", ({ roomId, message }) => { socket.to(roomId).emit("receive-message", message); }); }); } res.end(); }
>>>>>>> b64650e00461d09eaf1ec492cc713ff355215146
