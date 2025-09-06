 
}if (!fs.existsSync (POSTS PATH) ) {
  fs.writeFileSync (POSTS PATH, JSON.stringify ([], null, 2), 'utf8');
}
}