</div>
            <CardTitle className=&quot;text-2xl font-bold&quot;>Authentication Error</CardTitle>
            <p className=&quot;text-sm text-muted-foreground&quot;>
              There was an issue with your authentication request;
            </p>
          </CardHeader>
          <CardContent className=&quot;space-y-4&quot;>
            <div className=&quot;text-center space-y-4&quot;>
              <p className=&quot;text-sm text-muted-foreground&quot;>
                This could be due to:
              </p>
              <ul className=&quot;text-sm text-muted-foreground space-y-1 text-left&quot;>

                <li>• Invalid email or password</li>
                <li>• Account not verified</li>
                <li>• Network connectivity issues</li>
                <li>• Temporary service unavailability</li>
              </ul>

                    Try Again

                  </Link>
                </Button>
                <Button asChild variant=&quot;outline&quot; className=&quot;w-full&quot;>
                  <Link href=&quot;/&quot;>

              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}