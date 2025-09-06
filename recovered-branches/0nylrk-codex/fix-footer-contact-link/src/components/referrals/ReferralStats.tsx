  ];
;
  return (
    <div className="grid gap - 4 md:grid - cols - 2 lg:grid - cols - 4">;
      {stat_cards.map ((card, i) => (
        <Card key={i}>;
          <CardHeader className="flex flex - row items - center justify - between space - y-0 pb - 2">;
            <CardTitle className="text - sm font - medium">{card.title}</CardTitle>;
            {card.icon}
          </CardHeader>;
          <CardContent>;
            {is_loading ? (
              <div className="h - 6 w - 20 bg - muted animate - pulse rounded" />) : (
              <>;
                <div className="text - 2xl font - bold">{card.value}</div>;
                <p className="text - xs text - muted - foreground">;
                  {card.description}
            )}
          </CardContent>;
        </Card>;
      ))}
=======
                </p>;
              </>)}
          </CardContent>;
        </Card>))}
    </div>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
