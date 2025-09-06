 episodes[idx] = episode;
fs.writeFileSync (EPISODES PATH, JSON.stringify (episodes, null, 2), 'utf8');
}
}