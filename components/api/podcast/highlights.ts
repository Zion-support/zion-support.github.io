 start: t;
end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00' 
}) );
episode.highlights = highlights;
episodes[idx] = episode;
fs.writeFileSync (EPISODES PATH, JSON.stringify (episodes, null, 2), 'utf8');
}