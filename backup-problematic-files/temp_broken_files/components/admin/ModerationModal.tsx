import React, { useState } from 'react'
  onAction: (action: any
  const [adminNotes, setAdminNotes] = useState(''
          <button onClick={() => onAction('approve'
          <button onClick={() => onAction('remove'
          <button onClick={() => onAction('warn'
          <button onClick={() => onAction('ban'