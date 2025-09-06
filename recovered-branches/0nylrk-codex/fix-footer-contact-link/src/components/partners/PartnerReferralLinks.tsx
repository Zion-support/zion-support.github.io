  const { referralCode, getReferralLink, copyReferralLink, shareOnSocialMedia } = useReferrals();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const [selectedCampaign, setSelectedCampaign] = useState<string>("default");
  const [customParam, setCustomParam] = useState<string>("");
      setGeneratedLinks(prev => [...prev, newLink]);
      setIsDialogOpen(false);
      setCustomParam("");
    }
      "Name,Link";
      ...allLinks && allLinks.map(l => `${l && l.name},${l && l.link}`);
    ].join("\n");
              onClick={handleDownloadLinks}
              className="flex items-center gap-2">;
              <Download className="h-4 w-4" />;
              Export Links;
            </Button>;
          </CardTitle>;
          <CardDescription>Share this link with your audience to earn rewards</CardDescription>;
        </CardHeader>;
        <CardContent>;
          <div className="flex space-x-2">;
            <Input
              value={baseLink}
              readOnly
              className="font-mono text-sm"
                  <SelectTrigger id="campaign">;
                    <SelectValue placeholder="Select campaign type" />;
                  </SelectTrigger>;
                  <SelectContent>;
                    <SelectItem value="default">General (Default)</SelectItem>;
                    <SelectItem value="youtube">YouTube</SelectItem>;
                    <SelectItem value="newsletter">Newsletter</SelectItem>;
                    <SelectItem value="blog">Blog</SelectItem>;
                    <SelectItem value="podcast">Podcast</SelectItem>;
                    <SelectItem value="social">Social Media</SelectItem>;
                  </SelectContent>;
                </Select>;
              </div>;
                />;
              </div>;
            </div>;
            <DialogFooter>;
                Generate Link;
              </Button>;
            </DialogFooter>;
          </DialogContent>;
        </Dialog>;
      </div>;
                  <Input
                    value={item && item.link}
                    readOnly
                    className="font-mono text-xs"
              <Button
                variant="outline"
                onClick={() => setIsDialogOpen(true)}
                className="flex items-center gap-2";
              >;
                <Plus className="h-4 w-4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>;
        )}
      </div>;
    </div>;
  );
=======
      <div className="grid gap - 4">;
        {generated_links.length > 0 ? (
          generated_links.map ((item, index) => (
            <Card key={index} className="bg - zion - blue - dark border - zion - blue - light">;
              <CardHeader className="pb - 2">;
                <CardTitle className="text - base flex items - center justify - between">;
                  <div className="flex items - center gap - 2">;
                    <Link className="h - 4 w - 4 text - zion - purple" />;
                    <span>{item.name || "Campaign Link"}</span>;
                  </div>;
                </CardTitle>;
              </CardHeader>;
              <CardContent className="pb - 4">;
                <div className="flex space - x-2">;
                  <Input;
                    value={item.link}
                    read_only;
                    className="font - mono text - xs";
                  />;
                  <Button;
                    variant="outline";
                    size="sm";
                    on_click={() => handleCopyLink (item.link)}
                  >;
                    <Copy className="h - 4 w - 4" />;
                    <span className="sr - only">Copy</span>;
                  </Button>;
                </div>;
              </CardContent>;
            </Card>))) : (
          <Card className="bg - zion - blue / 20 border - dashed border - zion - blue - light">;
            <CardContent className="flex flex - col items - center justify - center p - 6">;
              <p className="text - zion - slate - light text - center mb - 4">;
                Create custom campaign links to track different marketing efforts;
              </p>;
              <Button;
                variant="outline";
                on_click={() => setIsDialogOpen (true)}
                className="flex items - center gap - 2";
              >;
                <Plus className="h - 4 w - 4" />;
                Create First Link;
              </Button>;
            </CardContent>;
          </Card>)}
      </div>;
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}