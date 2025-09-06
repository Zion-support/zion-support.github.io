    return null;
  }
  return (
                  {cert.issuing_organization}
                </p>;
                <p className="text - xs text - muted - foreground mt - 1">;
                  Issued:{" "}
                  {cert.issue_date;
                    ? typeof cert.issue_date === "string";
                      ? cert.issue_date;
                      : format (cert.issue_date, "MMM yyyy");
                    : "N / A"}
                  {cert.expiration_date && (
                    <>;
                      {" "}
                      · Expires:{" "}
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
