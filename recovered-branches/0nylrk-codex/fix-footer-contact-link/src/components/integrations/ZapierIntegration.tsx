} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import { Check, Copy, ExternalLink } from "lucide-react";
  const [copied, setCopied] = useState(false);
  const [apiKey] = useState("zap_live_KztCaFieDu4VBnp8eMJZ9x73R");

  const handleCopyApiKey = () => {;
    navigator && navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
                Active;
              </Badge>;
            </div>;
          </CardHeader>;
          <CardContent>;
                  <Input
                    value={apiKey}
                    readOnly
                    className="font-mono text-sm"
                  />;
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={handleCopyApiKey}>;
                    {copied ? (;
                      <Check className="h-4 w-4" />;
                    ) : (;
                      <Copy className="h-4 w-4" />;
                    )}
                  </Button>;
                </div>;
              </div>;
            </div>;
          </CardContent>;
              Open Zapier Dashboard;
            </Button>;
          </CardFooter>;
        </Card>;
              </li>;
            </ul>;
          </CardContent>;
          <CardFooter>;
            </Button>;
          </CardFooter>;
        </Card>;
      </div>;
                Triggers when a new job is published on your account.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
                Triggers when a talent applies to your job.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
                Triggers when a contract is signed by all parties.;
              </p>;
              <Button size="sm" variant="outline">;
                Set Up Trigger;
              </Button>;
            </div>;
          </div>;
        </CardContent>;
      </Card>;
  );
=======
    </div>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}