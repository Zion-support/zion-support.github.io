            key={project.id}
            className="bg - zion - blue border - zion - blue - light overflow - hidden hover:border - zion - purple / 40 transition - colors duration - 300";
          >;
            {project.image_url ? (
              <AspectRatio ratio={16 / 9}>;
                <img;
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />;
              </AspectRatio>;
            ) : (;
              <div className="h-40 w-full flex items-center justify-center bg-zion-blue">;
                <FileText className="text-zion-purple h-12 w-12 opacity-50" />;
              </div>;
            )}
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex - wrap gap - 1 mb - 2">;
                  {project.tags.map ((tag, i) => (
                    <Badge;
                      key={i}
                      {tag}
                    </Badge>;
                  ))}
                </div>;
              )}
                      variant="outline";
                      className="text - xs border - zion - slate - dark text - zion - slate - light";
                    >;
                      {tag}
                    </Badge>))}
                </div>)}
              <div className="text - xs text - zion - slate - light mt - 2">;
                {project.date}
              </div>;
            </CardContent>;
          </Card>))}
      </div>;
    </div>);
}
