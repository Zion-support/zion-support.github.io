                  )}
                </p>;
              </div>;
              <div className="flex gap-2">;
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => onEdit(cert)}
                >;
                  <Edit className="h-4 w-4" />;
                </Button>;
                <Button
                  variant="ghost"
                  size="icon"
            {cert.credential_url && (
              <p className="text - xs mt - 2">;
                <a;
                  href={cert.credential_url}
                  rel="noopener noreferrer"
                  className="text-primary hover:underline">;
                  View credential;
                </a>;
              </p>;
            )}
          </CardContent>;
        </Card>;
      ))}
                  target="_blank";
                  rel="noopener noreferrer";
                  className="text - primary hover:underline";
                >;
                  View credential;
                </a>;
              </p>)}
          </CardContent>;
        </Card>))}
    </div>);
}
