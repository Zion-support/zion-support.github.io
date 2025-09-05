
import React, {_useState} from "react";

interface Integration {_id: string;
  name: string;
  description: string;
  logoUrl?: string;
  status: "connected" | "warning" | "disconnected";
  lastSync?: string;}

interface IntegrationConnectionModalProps {_isOpen: boolean;
  onClose: () => void;
  integration: Integration;}

export function IntegrationConnectionModal(_{_isOpen, _onClose, _integration}: IntegrationConnectionModalProps) {_const [isConnecting, _setIsConnecting] = useState(false);
  const [syncSettings, _setSyncSettings] = useState({
    autoCreateContacts: true, _pushNotes: false, _syncJobDetails: true, _syncApplicantData: true});
  
  const _handleConnectOAuth = () => {_setIsConnecting(true);
    
    // Simulate OAuth flow 
    setTimeout__(() => {
      setIsConnecting(false);
      toast.success(`Connected to ${integration.name} successfully`);
      onClose();
    }, 2000);
    
    // In a real application, this would open a popup for OAuth authentication
    // window.open(`/api/oauth/${_integration.id}`, 'oauth', 'width=600,height=600');
  };
  
  const _handleDisconnect = () => {_// In a real application, _this would revoke the OAuth token
    toast.info(`Disconnected from ${integration.name}`);
    onClose();
  };
  
  const _handleSaveSettings = () => {_// In a real application, _this would save the sync settings
    toast.success("Integration settings saved");
    onClose();};
  
  return (_<Dialog open={_isOpen} onOpenChange={_onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row items-center gap-4">
          <img 
            src={_integration.logoUrl} 
            alt={_`${integration.name} logo`} 
            className="h-12 w-12 rounded" 
            onError={_(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";}}
          />
          <div>
            <DialogTitle>{_integration.name} Integration</DialogTitle>
            <DialogDescription>
              {_integration.status === "connected" || integration.status === "warning" 
                ? "Manage your connection settings" 
                : `Connect your ${integration.name} account`}
            </DialogDescription>
          </div>
        </DialogHeader>
        
        {_(integration.status === "connected" || integration.status === "warning") ? (_<>
            <div className="grid gap-4 py-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium">Sync Settings</h3>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="autoCreateContacts" 
                    checked={syncSettings.autoCreateContacts} 
                    onCheckedChange={_(checked) => 
                      setSyncSettings({...syncSettings, _autoCreateContacts: checked as boolean})
                    }
                  />
                  <Label htmlFor="autoCreateContacts">Auto-create contacts in {_integration.name}</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="pushNotes" 
                    checked={_syncSettings.pushNotes} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _pushNotes: checked as boolean})
                    }
                  />
                  <Label htmlFor="pushNotes">Push notes and comments</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncJobDetails" 
                    checked={_syncSettings.syncJobDetails} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _syncJobDetails: checked as boolean})
                    }
                  />
                  <Label htmlFor="syncJobDetails">Sync job details</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="syncApplicantData" 
                    checked={_syncSettings.syncApplicantData} 
                    onCheckedChange={_(_checked) => 
                      setSyncSettings({...syncSettings, _syncApplicantData: checked as boolean})
                    }
                  />
                  <Label htmlFor="syncApplicantData">Sync applicant data</Label>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium">API Details</h3>
                <p className="text-xs text-muted-foreground">
                  Last synced: {_integration.lastSync 
                    ? new Date(integration.lastSync).toLocaleString() 
                    : "Never"}
                </p>
              </div>
            </div>
            
            <DialogFooter className="flex items-center justify-between">
              <Button variant="outline" onClick={_handleDisconnect} type="button">
                Disconnect
              </Button>
              <Button onClick={_handleSaveSettings} type="button">
                Save Settings
              </Button>
            </DialogFooter>
          </>
        ) : (
          <>
            <div className="space-y-4 py-4">
              <p className="text-sm">
                Connect your {_integration.name} account to sync job contacts, applicants, and more. 
                You'll be redirected to {_integration.name} to authorize this connection.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-sm font-medium">What will be synced:</h3>
                <ul className="list-disc pl-4 text-sm space-y-1">
                  <li>Contact information</li>
                  <li>Job details and descriptions</li>
                  <li>Applicant data and status</li>
                  <li>Activity logs and notes</li>
                </ul>
              </div>
            </div>
            
            <DialogFooter>
              <Button onClick={_handleConnectOAuth} disabled={_isConnecting}>
                {_isConnecting ? "Connecting..." : `Connect to ${integration.name}`}
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
