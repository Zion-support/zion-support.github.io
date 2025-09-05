 // Content analysis functionality // Check for suspicious phrases for (const phrase of suspiciousPhrases) {
  if (contentLower.includes (phrase.toLowerCase () ) ) {
  
}
}// Check for links (simplified check) if (hasExternalLinks && (contentLower.includes ('payment') || contentLower.includes ('money') || contentLower.includes ('deal') 