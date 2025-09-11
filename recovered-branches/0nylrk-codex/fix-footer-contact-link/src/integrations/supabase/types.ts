      api_logs: {;
        Row: {;

          created_at: string
          id: string
          message: string
          response: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          response: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          response?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ai_chats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          }]
      }
      analytics_events: {
        Row: {
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          path: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "analytics_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          }]
      }
      api_keys: {
        Row: {
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          scopes: Database["public"]["Enums"]["api_key_scope"][]
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash: string
          key_prefix: string
          last_used_at?: string | null
          name: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          }]
      }
      api_logs: {
        Row: {
          api_key_id: string | null
          created_at: string
          endpoint: string
          id: string
          ip_address: string | null
          method: string
          response_time_ms: number | null
          status_code: number
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          api_key_id?: string | null
          created_at?: string
          endpoint: string
          id?: string
          ip_address?: string | null
          method: string
          response_time_ms?: number | null
          status_code: number
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          api_key_id?: string | null
          created_at?: string
          endpoint?: string
          id?: string
          ip_address?: string | null
          method?: string
          response_time_ms?: number | null
          status_code?: number
          user_agent?: string | null
          user_id?: string | null
      api_logs: {;
        Row: {;
          id: string;
          message: string;
          response: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          message: string;
          response: string;
          user_id: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          message?: string;
          response?: string;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "ai_chats_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      analytics_events: {
        Row: {
          created_at: string | null;
          event_type: string;
          id: string;
          metadata: Json | null;
          path: string | null;
          session_id: string | null;
          user_id: string | null;
        }
        Insert: {
          created_at?: string | null;
          event_type: string;
          id?: string;
          metadata?: Json | null;
          path?: string | null;
          session_id?: string | null;
          user_id?: string | null;
        }
        Update: {
          created_at?: string | null;
          event_type?: string;
          id?: string;
          metadata?: Json | null;
          path?: string | null;
          session_id?: string | null;
          user_id?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "analytics_events_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      api_keys: {
        Row: {
          created_at: string;
          expires_at: string | null;
          id: string;
          is_active: boolean;
          key_hash: string;
          key_prefix: string;
          last_used_at: string | null;
          name: string;
          scopes: Database["public"]["Enums"]["api_key_scope"][];
          user_id: string;
        }
        Insert: {
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          is_active?: boolean;
          key_hash: string;
          key_prefix: string;
          last_used_at?: string | null;
          name: string;
          scopes?: Database["public"]["Enums"]["api_key_scope"][];
          user_id: string;
        }
        Update: {
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          is_active?: boolean;
          key_hash?: string;
          key_prefix?: string;
          last_used_at?: string | null;
          name?: string;
          scopes?: Database["public"]["Enums"]["api_key_scope"][];
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "api_keys_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      api_logs: {;
        Row: {;
      api_logs: {
        Row: {
          api_key_id: string | null
          created_at: string
          endpoint: string
          id: string
          ip_address: string | null
          method: string
          response_time_ms: number | null
          status_code: number
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          api_key_id?: string | null
          created_at?: string
          endpoint: string
          id?: string
          ip_address?: string | null
          method: string
          response_time_ms?: number | null
          status_code: number
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          api_key_id?: string | null
          created_at?: string
          endpoint?: string
          id?: string
          ip_address?: string | null
          method?: string
          response_time_ms?: number | null
          status_code?: number
          user_agent?: string | null
          user_id?: string | null
      api_logs: {;
        Row: {;
          api_key_id: string | null;
          created_at: string;
          endpoint: string;
          id: string;
          ip_address: string | null;
          method: string;
          response_time_ms: number | null;
          status_code: number;
          user_agent: string | null;
          user_id: string | null;
        }

        }
        Relationships: [;
          {
            foreignKeyName: "api_logs_api_key_id_fkey";
            columns: ["api_key_id"];
            isOneToOne: false;
            referenced_relation: "api_keys";
            referenced_columns: ["id"];
            referencedColumns: ["id"]

          }

            referencedColumns: ["id"]

            foreignKeyName: "fraud_flags_reviewed_by_fkey";
            columns: ["reviewed_by"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          {
            foreignKeyName: "fraud_flags_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      hire_requests: {
        Row: {
          attachments: Json | null;
          budget_display: string | null;
          budget_max: number | null;
          budget_min: number | null;
          created_at: string;
          expiry_date: string | null;
          id: string;
          project_overview: string;
          project_summary: string | null;
          project_type: string | null;
          requester_email: string;
          requester_id: string | null;
          requester_name: string;
          status: string;
          talent_id: string;
          timeline: string;
          updated_at: string;
        }
        Insert: {
          attachments?: Json | null;
          budget_display?: string | null;
          budget_max?: number | null;
          budget_min?: number | null;
          created_at?: string;
          expiry_date?: string | null;
          id?: string;
          project_overview: string;
          project_summary?: string | null;
          project_type?: string | null;
          requester_email: string;
          requester_id?: string | null;
          requester_name: string;
          status?: string;
          talent_id: string;
          timeline: string;
          updated_at?: string;
        }
        Update: {
          attachments?: Json | null;
          budget_display?: string | null;
          budget_max?: number | null;
          budget_min?: number | null;
          created_at?: string;
          expiry_date?: string | null;
          id?: string;
          project_overview?: string;
          project_summary?: string | null;
          project_type?: string | null;
          requester_email?: string;
          requester_id?: string | null;
          requester_name?: string;
          status?: string;
          talent_id?: string;
          timeline?: string;
          updated_at?: string;
        }
        Relationships: [];
      }
      interviews: {
        Row: {
          client_id: string;
          created_at: string;
          duration_minutes: number;
          end_time: string | null;
          id: string;
          interview_type: string;
          meeting_link: string | null;
          meeting_platform: string | null;
          notes: string | null;
          reminder_sent: string | null;
          scheduled_date: string;
          status: string;
          talent_id: string;
          title: string | null;
          updated_at: string;
        }
        Insert: {
          client_id: string;
          created_at?: string;
          duration_minutes?: number;
          end_time?: string | null;
          id?: string;
          interview_type?: string;
          meeting_link?: string | null;
          meeting_platform?: string | null;
          notes?: string | null;
          reminder_sent?: string | null;
          scheduled_date: string;
          status?: string;
          talent_id: string;
          title?: string | null;
          updated_at?: string;
        }
        Update: {
          client_id?: string;
          created_at?: string;
          duration_minutes?: number;
          end_time?: string | null;
          id?: string;
          interview_type?: string;
          meeting_link?: string | null;
          meeting_platform?: string | null;
          notes?: string | null;
          reminder_sent?: string | null;
          scheduled_date?: string;
          status?: string;
          talent_id?: string;
          title?: string | null;
          updated_at?: string;
        }
        Relationships: [];
      }
      job_applications: {
        Row: {
          cover_letter: string | null;
          created_at: string | null;
          id: string;
          is_shortlisted: boolean | null;
          job_id: string;
          match_breakdown: Json | null;
          match_score: number | null;
          match_suggestion: string | null;
          match_summary: string | null;
          resume_id: string | null;
          scored_at: string | null;
          status: string;
          talent_id: string;
          viewed_at: string | null;
        }
        Insert: {
          cover_letter?: string | null;
          created_at?: string | null;
          id?: string;
          is_shortlisted?: boolean | null;
          job_id: string;
          match_breakdown?: Json | null;
          match_score?: number | null;
          match_suggestion?: string | null;
          match_summary?: string | null;
          resume_id?: string | null;
          scored_at?: string | null;
          status?: string;
          talent_id: string;
          viewed_at?: string | null;
        }
        Update: {
          cover_letter?: string | null;
          created_at?: string | null;
          id?: string;
          is_shortlisted?: boolean | null;
          job_id?: string;
          match_breakdown?: Json | null;
          match_score?: number | null;
          match_suggestion?: string | null;
          match_summary?: string | null;
          resume_id?: string | null;
          scored_at?: string | null;
          status?: string;
          talent_id?: string;
          viewed_at?: string | null;
        }
        Relationships: [;
          {

          },



          }
          },          {
            foreignKeyName: "job_applications_resume_id_fkey";
            columns: ["resume_id"];
            isOneToOne: false;
            referenced_relation: "talent_resumes";
            referenced_columns: ["id"];
            foreignKeyName: "milestone_activities_milestone_id_fkey";
            columns: ["milestone_id"];
            isOneToOne: false;
            referenced_relation: "project_milestones";
            referenced_columns: ["id"];
          },


          }

          },=======
          }
          },
          {
            foreignKeyName: "milestone_activities_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      notification_preferences: {
        Row: {
          created_at: string;
          id: string;
          marketing_emails: boolean | null;
          system_notifications: boolean | null;
          updated_at: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          marketing_emails?: boolean | null;
          system_notifications?: boolean | null;
          updated_at?: string;
          user_id: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          marketing_emails?: boolean | null;
          system_notifications?: boolean | null;
          updated_at?: string;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "notification_preferences_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      notifications: {
        Row: {
          created_at: string | null;
          id: string;
          message: string;
          read: boolean | null;
          related_id: string | null;
          title: string;
          type: string;
          updated_at: string | null;
          user_id: string;
        }
        Insert: {
          created_at?: string | null;
          id?: string;
          message: string;
          read?: boolean | null;
          related_id?: string | null;
          title: string;
          type: string;
          updated_at?: string | null;
          user_id: string;
        }
        Update: {
          created_at?: string | null;
          id?: string;
          message?: string;
          read?: boolean | null;
          related_id?: string | null;
          title?: string;
          type?: string;
          updated_at?: string | null;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "notifications_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      partner_payouts: {
        Row: {
          amount: number;
          completed_at: string | null;
          created_at: string;
          id: string;
          method: string;
          partner_id: string;
          payout_details: Json | null;
          status: string;
          updated_at: string;
        }
        Insert: {
          amount: number;
          completed_at?: string | null;
          created_at?: string;
          id?: string;
          method: string;
          partner_id: string;
          payout_details?: Json | null;
          status?: string;
          updated_at?: string;
        }
        Update: {
          amount?: number;
          completed_at?: string | null;
          created_at?: string;
          id?: string;
          method?: string;
          partner_id?: string;
          payout_details?: Json | null;
          status?: string;
          updated_at?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "partner_payouts_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referenced_relation: "partner_profiles";
            referenced_columns: ["id"];
          }];
      }
      partner_profiles: {
        Row: {
          audience_size: string;
          bio: string;
          commission_rate: number | null;
          created_at: string;
          fraud_flags: number | null;
          id: string;
          name: string;
          niche: string;
          payout_method: string;
          social_media: Json | null;
          status: string;
          updated_at: string;
          user_id: string;
          website: string | null;
        }
        Insert: {
          audience_size: string;
          bio: string;
          commission_rate?: number | null;
          created_at?: string;
          fraud_flags?: number | null;
          id?: string;
          name: string;
          niche: string;
          payout_method: string;
          social_media?: Json | null;
          status?: string;
          updated_at?: string;
          user_id: string;
          website?: string | null;
        }
        Update: {
          audience_size?: string;
          bio?: string;
          commission_rate?: number | null;
          created_at?: string;
          fraud_flags?: number | null;
          id?: string;
          name?: string;
          niche?: string;
          payout_method?: string;
          social_media?: Json | null;
          status?: string;
          updated_at?: string;
          user_id?: string;
          website?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "partner_profiles_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      partner_referral_links: {
        Row: {
          campaign: string | null;
          clicks: number | null;
          conversions: number | null;
          created_at: string;
          id: string;
          name: string;
          partner_id: string;
          source: string | null;
          updated_at: string;
        }
        Insert: {
          campaign?: string | null;
          clicks?: number | null;
          conversions?: number | null;
          created_at?: string;
          id?: string;
          name: string;
          partner_id: string;
          source?: string | null;
          updated_at?: string;
        }
        Update: {
          campaign?: string | null;
          clicks?: number | null;
          conversions?: number | null;
          created_at?: string;
          id?: string;
          name?: string;
          partner_id?: string;
          source?: string | null;
          updated_at?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "partner_referral_links_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referenced_relation: "partner_profiles";
            referenced_columns: ["id"];
          }];
      }
      portfolio_projects: {
        Row: {
          created_at: string;
          demo_url: string | null;
          description: string | null;
          github_url: string | null;
          id: string;
          image_url: string | null;
          pdf_url: string | null;
          technologies: string[] | null;
          title: string;
          updated_at: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          demo_url?: string | null;
          description?: string | null;
          github_url?: string | null;
          id?: string;
          image_url?: string | null;
          pdf_url?: string | null;
          technologies?: string[] | null;
          title: string;
          updated_at?: string;
          user_id: string;
        }
        Update: {
          created_at?: string;
          demo_url?: string | null;
          description?: string | null;
          github_url?: string | null;
          id?: string;
          image_url?: string | null;
          pdf_url?: string | null;
          technologies?: string[] | null;
          title?: string;
          updated_at?: string;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "portfolio_projects_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      profiles: {
        Row: {
          avatar_url: string | null;
          average_rating: number | null;
          bio: string | null;
          created_at: string;
          display_name: string | null;
          headline: string | null;
          id: string;
          ip_address: string | null;
          last_login_ip: string | null;
          profile_complete: boolean;
          rating_count: number | null;
          rating_sum: number | null;
          role: string | null;
          signup_timestamp: string | null;
          tenant_id: string | null;
          updated_at: string;
          user_type: string | null;
        }
        Insert: {
          avatar_url?: string | null;
          average_rating?: number | null;
          bio?: string | null;
          created_at?: string;
          display_name?: string | null;
          headline?: string | null;
          id: string;
          ip_address?: string | null;
          last_login_ip?: string | null;
          profile_complete?: boolean;
          rating_count?: number | null;
          rating_sum?: number | null;
          role?: string | null;
          signup_timestamp?: string | null;
          tenant_id?: string | null;
          updated_at?: string;
          user_type?: string | null;
        }
        Update: {
          avatar_url?: string | null;
          average_rating?: number | null;
          bio?: string | null;
          created_at?: string;
          display_name?: string | null;
          headline?: string | null;
          id?: string;
          ip_address?: string | null;
          last_login_ip?: string | null;
          profile_complete?: boolean;
          rating_count?: number | null;
          rating_sum?: number | null;
          role?: string | null;
          signup_timestamp?: string | null;
          tenant_id?: string | null;
          updated_at?: string;
          user_type?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "profiles_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          },


          }

          },=======
          }
          },
          {
            foreignKeyName: "profiles_tenant_id_fkey";
            columns: ["tenant_id"];
            isOneToOne: false;
            referenced_relation: "whitelabel_tenants";
            referenced_columns: ["id"];
          }];
      }
      project_milestones: {
        Row: {
          amount: number;
          created_at: string;
          created_by: string;
          deliverables: Json | null;
          description: string | null;
          due_date: string | null;
          id: string;
          project_id: string;
          status: string;
          title: string;
          updated_at: string;
        }
        Insert: {
          amount: number;
          created_at?: string;
          created_by: string;
          deliverables?: Json | null;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          project_id: string;
          status?: string;
          title: string;
          updated_at?: string;
        }
        Update: {
          amount?: number;
          created_at?: string;
          created_by?: string;
          deliverables?: Json | null;
          description?: string | null;
          due_date?: string | null;
          id?: string;
          project_id?: string;
          status?: string;
          title?: string;
          updated_at?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "project_milestones_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          },


          }

          },=======
          }
          },
          {
            foreignKeyName: "project_milestones_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referenced_relation: "projects";
            referenced_columns: ["id"];
          }];
      }
      project_notes: {
        Row: {
          content: string;
          created_at: string;
          id: string;
          project_id: string;
          user_id: string;
        }
        Insert: {
          content: string;
          created_at?: string;
          id?: string;
          project_id: string;
          user_id: string;
        }
        Update: {
          content?: string;
          created_at?: string;
          id?: string;
          project_id?: string;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "project_notes_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referenced_relation: "projects";
            referenced_columns: ["id"];
          },


          }

          },=======
          }
          },
          {
            foreignKeyName: "project_notes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      projects: {
        Row: {
          agreement_url: string | null;
          client_id: string;
          created_at: string;
          id: string;
          job_id: string;
          payment_terms: string;
          scope_summary: string;
          start_date: string;
          status: string;
          talent_id: string;
          updated_at: string;
        }
        Insert: {
          agreement_url?: string | null;
          client_id: string;
          created_at?: string;
          id?: string;
          job_id: string;
          payment_terms: string;
          scope_summary: string;
          start_date: string;
          status?: string;
          talent_id: string;
          updated_at?: string;
        }
        Update: {
          agreement_url?: string | null;
          client_id?: string;
          created_at?: string;
          id?: string;
          job_id?: string;
          payment_terms?: string;
          scope_summary?: string;
          start_date?: string;
          status?: string;
          talent_id?: string;
          updated_at?: string;
        }
        Relationships: [;
          {

          },



          }
          },          {
            foreignKeyName: "projects_job_id_fkey";
            columns: ["job_id"];
            isOneToOne: false;
            referenced_relation: "jobs";
            referenced_columns: ["id"];
            foreignKeyName: "quote_requests_requester_id_fkey";
            columns: ["requester_id"];
            isOneToOne: false;
            referenced_relation: "profiles";
            referenced_columns: ["id"];
          },


          }

          },=======
          }
          },
          {
            foreignKeyName: "quote_requests_talent_id_fkey";
            columns: ["talent_id"];
            isOneToOne: false;
            referenced_relation: "profiles";
            referenced_columns: ["id"];
          }];
      }
      referral_codes: {;
        Row: {;

        }
        Relationships: [;
          {
            foreignKeyName: "referral_codes_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: true;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      referral_rewards: {
        Row: {
          amount: number | null;
          created_at: string;
          expires_at: string | null;
          id: string;
          partner_id: string | null;
          referral_id: string;
          reward_type: string;
          user_id: string;
        }
        Insert: {
          amount?: number | null;
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          partner_id?: string | null;
          referral_id: string;
          reward_type: string;
          user_id: string;
        }
        Update: {
          amount?: number | null;
          created_at?: string;
          expires_at?: string | null;
          id?: string;
          partner_id?: string | null;
          referral_id?: string;
          reward_type?: string;
          user_id?: string;
        }
        Relationships: [;
          {

          },


            foreignKeyName: "referrals_partner_id_fkey";
            columns: ["partner_id"];
            isOneToOne: false;
            referenced_relation: "partner_profiles";
            referenced_columns: ["id"];
          }

          }
          },          {
            foreignKeyName: "referrals_referral_code_fkey";
            columns: ["referral_code"];
            isOneToOne: false;
            referenced_relation: "referral_codes";
            referenced_columns: ["code"];
          }
          {
            foreignKeyName: "referrals_referred_id_fkey";
            columns: ["referred_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];

      reminder_logs: {;
        Row: {;

        }
        Relationships: [;
          {
            foreignKeyName: "reminder_logs_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      resume_skills: {
        Row: {
          category: string | null;
          created_at: string;
          id: string;
          name: string;
          proficiency: number | null;
          resume_id: string;
          years_experience: number | null;
        }
        Insert: {
          category?: string | null;
          created_at?: string;
          id?: string;
          name: string;
          proficiency?: number | null;
          resume_id: string;
          years_experience?: number | null;
        }
        Update: {
          category?: string | null;
          created_at?: string;
          id?: string;
          name?: string;
          proficiency?: number | null;
          resume_id?: string;
          years_experience?: number | null;
        }
        Relationships: [;
          {
            foreignKeyName: "resume_skills_resume_id_fkey";
            columns: ["resume_id"];
            isOneToOne: false;
            referenced_relation: "talent_resumes";
            referenced_columns: ["id"];
          }];
      }
      review_reports: {
        Row: {
          created_at: string;
          id: string;
          reason: string;
          reporter_id: string;
          resolved_at: string | null;
          review_id: string;
          status: string;
        }
        Insert: {
          created_at?: string;
          id?: string;
          reason: string;
          reporter_id: string;
          resolved_at?: string | null;
          review_id: string;
          status?: string;
        }
        Update: {
          created_at?: string;
          id?: string;
          reason?: string;
          reporter_id?: string;
          resolved_at?: string | null;
          review_id?: string;
          status?: string;
        }
        Relationships: [;          {
            foreignKeyName: "review_reports_reporter_id_fkey"
            columns: ["reporter_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
          },

          }
          },          {
            foreignKeyName: "review_reports_review_id_fkey";
            columns: ["review_id"];
            isOneToOne: false;
            referenced_relation: "reviews";
            referenced_columns: ["id"];
          }];
      }
      reviews: {
        Row: {
          communication_rating: number | null;
          created_at: string;
          id: string;
          is_anonymous: boolean;
          is_visible: boolean;
          project_id: string;
          quality_rating: number | null;
          rating: number;
          report_count: number;
          review_text: string;
          reviewee_id: string;
          reviewer_id: string;
          status: string;
          timeliness_rating: number | null;
          updated_at: string;
          would_work_again: boolean | null;
        }
        Insert: {
          communication_rating?: number | null;
          created_at?: string;
          id?: string;
          is_anonymous?: boolean;
          is_visible?: boolean;
          project_id: string;
          quality_rating?: number | null;
          rating: number;
          report_count?: number;
          review_text: string;
          reviewee_id: string;
          reviewer_id: string;
          status?: string;
          timeliness_rating?: number | null;
          updated_at?: string;
          would_work_again?: boolean | null;
        }
        Update: {
          communication_rating?: number | null;
          created_at?: string;
          id?: string;
          is_anonymous?: boolean;
          is_visible?: boolean;
          project_id?: string;
          quality_rating?: number | null;
          rating?: number;
          report_count?: number;
          review_text?: string;
          reviewee_id?: string;
          reviewer_id?: string;
          status?: string;
          timeliness_rating?: number | null;
          updated_at?: string;
          would_work_again?: boolean | null;
        }
        Relationships: [;
          {

          },

          }
          },
          {
            foreignKeyName: "review_reports_review_id_fkey";
            columns: ["review_id"];
            isOneToOne: false;
            referenced_relation: "reviews";
            referenced_columns: ["id"];
          }];
      }
      reviews: {
        Row: {
          communication_rating: number | null;
          created_at: string;
          id: string;
          is_anonymous: boolean;
          is_visible: boolean;
          project_id: string;
          quality_rating: number | null;
          rating: number;
          report_count: number;
          review_text: string;
          reviewee_id: string;
          reviewer_id: string;
          status: string;
          timeliness_rating: number | null;
          updated_at: string;
          would_work_again: boolean | null;
        }
        Insert: {
          communication_rating?: number | null;
          created_at?: string;
          id?: string;
          is_anonymous?: boolean;
          is_visible?: boolean;
          project_id: string;
          quality_rating?: number | null;
          rating: number;
          report_count?: number;
          review_text: string;
          reviewee_id: string;
          reviewer_id: string;
          status?: string;
          timeliness_rating?: number | null;
          updated_at?: string;
          would_work_again?: boolean | null;
        }
        Update: {
          communication_rating?: number | null;
          created_at?: string;
          id?: string;
          is_anonymous?: boolean;
          is_visible?: boolean;
          project_id?: string;
          quality_rating?: number | null;
          rating?: number;
          report_count?: number;
          review_text?: string;
          reviewee_id?: string;
          reviewer_id?: string;
          status?: string;
          timeliness_rating?: number | null;
          updated_at?: string;
          would_work_again?: boolean | null;
        }
        Relationships: [;
          {


          },

          }
          },
          {
            foreignKeyName: "reviews_reviewee_id_fkey"
            columns: ["reviewee_id"]
            isOneToOne: false
            referencedRelation: "user_metrics"
            referencedColumns: ["user_id"]
            foreignKeyName: "reviews_project_id_fkey";
            columns: ["project_id"];
            isOneToOne: false;
            referenced_relation: "projects";
            referenced_columns: ["id"];
          }

          }
          },          {
            foreignKeyName: "reviews_reviewee_id_fkey";
            columns: ["reviewee_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
            foreignKeyName: "tenant_administrators_tenant_id_fkey";
            columns: ["tenant_id"];
            isOneToOne: false;
            referenced_relation: "whitelabel_tenants";
            referenced_columns: ["id"];
          }

          },

          }
          },          {
            foreignKeyName: "tenant_administrators_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      user_onboarding: {
        Row: {
          application_sent: boolean | null;
          application_sent_at: string | null;
          availability_set: boolean | null;
          availability_set_at: string | null;
          created_at: string;
          id: string;
          job_posted: boolean | null;
          job_posted_at: string | null;
          last_reminder_sent: string | null;
          match_received: boolean | null;
          match_received_at: string | null;
          match_viewed: boolean | null;
          match_viewed_at: string | null;
          profile_completed: boolean | null;
          profile_completed_at: string | null;
          quote_received: boolean | null;
          quote_received_at: string | null;
          reminder_count: number | null;
          role: string;
          skills_added: boolean | null;
          skills_added_at: string | null;
          talent_invited: boolean | null;
          talent_invited_at: string | null;
          updated_at: string;
          user_id: string | null;
        }
        Insert: {
          application_sent?: boolean | null;
          application_sent_at?: string | null;
          availability_set?: boolean | null;
          availability_set_at?: string | null;
          created_at?: string;
          id?: string;
          job_posted?: boolean | null;
          job_posted_at?: string | null;
          last_reminder_sent?: string | null;
          match_received?: boolean | null;
          match_received_at?: string | null;
          match_viewed?: boolean | null;
          match_viewed_at?: string | null;
          profile_completed?: boolean | null;
          profile_completed_at?: string | null;
          quote_received?: boolean | null;
          quote_received_at?: string | null;
          reminder_count?: number | null;
          role: string;
          skills_added?: boolean | null;
          skills_added_at?: string | null;
          talent_invited?: boolean | null;
          talent_invited_at?: string | null;
          updated_at?: string;
          user_id?: string | null;
        }
        Update: {
          application_sent?: boolean | null;
          application_sent_at?: string | null;
          availability_set?: boolean | null;
          availability_set_at?: string | null;
          created_at?: string;
          id?: string;
          job_posted?: boolean | null;
          job_posted_at?: string | null;
          last_reminder_sent?: string | null;
          match_received?: boolean | null;
          match_received_at?: string | null;
          match_viewed?: boolean | null;
          match_viewed_at?: string | null;
          profile_completed?: boolean | null;
          profile_completed_at?: string | null;
          quote_received?: boolean | null;
          quote_received_at?: string | null;
          reminder_count?: number | null;
          role?: string;
          skills_added?: boolean | null;
          skills_added_at?: string | null;
          talent_invited?: boolean | null;
          talent_invited_at?: string | null;
          updated_at?: string;
          user_id?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "user_onboarding_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      user_privacy_settings: {
        Row: {
          activity_monitoring_enabled: boolean | null;
          ai_analysis_enabled: boolean | null;
          id: string;
          message_scanning_enabled: boolean | null;
          updated_at: string | null;
        }
        Insert: {
          activity_monitoring_enabled?: boolean | null;
          ai_analysis_enabled?: boolean | null;
          id: string;
          message_scanning_enabled?: boolean | null;
          updated_at?: string | null;
        }
        Update: {
          activity_monitoring_enabled?: boolean | null;
          ai_analysis_enabled?: boolean | null;
          id?: string;
          message_scanning_enabled?: boolean | null;
          updated_at?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "user_privacy_settings_id_fkey";
            columns: ["id"];
            isOneToOne: true;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      webhook_configs: {
        Row: {
          created_at: string;
          event_types: string[];
          id: string;
          is_active: boolean;
          last_triggered_at: string | null;
          name: string;
          secret: string | null;
          updated_at: string;
          url: string;
          user_id: string;
        }
        Insert: {
          created_at?: string;
          event_types: string[];
          id?: string;
          is_active?: boolean;
          last_triggered_at?: string | null;
          name: string;
          secret?: string | null;
          updated_at?: string;
          url: string;
          user_id: string;
        }
        Update: {
          created_at?: string;
          event_types?: string[];
          id?: string;
          is_active?: boolean;
          last_triggered_at?: string | null;
          name?: string;
          secret?: string | null;
          updated_at?: string;
          url?: string;
          user_id?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "webhook_configs_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      whitelabel_tenants: {
        Row: {
          account_manager_id: string | null;
          brand_name: string;
          created_at: string | null;
          custom_domain: string | null;
          dns_verified: boolean;
          email_template_override: Json | null;
          id: string;
          is_active: boolean;
          landing_page_copy: Json | null;
          logo_url: string | null;
          primary_color: string;
          subdomain: string;
          theme_preset: string;
          updated_at: string | null;
        }
        Insert: {
          account_manager_id?: string | null;
          brand_name: string;
          created_at?: string | null;
          custom_domain?: string | null;
          dns_verified?: boolean;
          email_template_override?: Json | null;
          id?: string;
          is_active?: boolean;
          landing_page_copy?: Json | null;
          logo_url?: string | null;
          primary_color?: string;
          subdomain: string;
          theme_preset?: string;
          updated_at?: string | null;
        }
        Update: {
          account_manager_id?: string | null;
          brand_name?: string;
          created_at?: string | null;
          custom_domain?: string | null;
          dns_verified?: boolean;
          email_template_override?: Json | null;
          id?: string;
          is_active?: boolean;
          landing_page_copy?: Json | null;
          logo_url?: string | null;
          primary_color?: string;
          subdomain?: string;
          theme_preset?: string;
          updated_at?: string | null;
        }
        Relationships: [;
          {
            foreignKeyName: "whitelabel_tenants_account_manager_id_fkey";
            columns: ["account_manager_id"];
            isOneToOne: false;
            referenced_relation: "user_metrics";
            referenced_columns: ["user_id"];
          }];
      }
      work_history: {
        Row: {
          company_logo_url: string | null;
          company_name: string;
          created_at: string;
          description: string | null;
          end_date: string | null;
          id: string;
          is_current: boolean;
          location: string | null;
          resume_id: string;
          role_title: string;
          start_date: string;
          updated_at: string;
        }
        Insert: {
          company_logo_url?: string | null;
          company_name: string;
          created_at?: string;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          is_current?: boolean;
          location?: string | null;
          resume_id: string;
          role_title: string;
          start_date: string;
          updated_at?: string;
        }
        Update: {
          company_logo_url?: string | null;
          company_name?: string;
          created_at?: string;
          description?: string | null;
          end_date?: string | null;
          id?: string;
          is_current?: boolean;
          location?: string | null;
          resume_id?: string;
          role_title?: string;
          start_date?: string;
          updated_at?: string;
        }
        Relationships: [;
          {
            foreignKeyName: "work_history_resume_id_fkey";
            columns: ["resume_id"];
            isOneToOne: false;
            referenced_relation: "talent_resumes";
            referenced_columns: ["id"];
          }];
          conversion_count: number | null
          conversion_rate: number | null
          conversion_type: string | null
          date: string | null
          view_count: number | null
        }
        Relationships: []
      }
      daily_page_views: {
        Row: {
          date: string | null
          path: string | null
          view_count: number | null
        }
        Relationships: []
      }
      user_metrics: {
        Row: {
          job_applications: number | null
          profile_views: number | null
          quote_invites: number | null
          success_rate: number | null
          user_id: string | null
        }
        Insert: {
          job_applications?: never
          profile_views?: never
          quote_invites?: never
          success_rate?: never
          user_id?: string | null
        }
        Update: {
          job_applications?: never
          profile_views?: never
          quote_invites?: never
          success_rate?: never
          user_id?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      check_users_needing_reminders: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_id: string
          email: string
          display_name: string
          user_type: string
          last_login: string
          reminder_type: string
          days_since_login: number
          onboarding_status: Json
        }[]
          conversion_rate: number | null;
          conversion_type: string | null;
          date: string | null;
          view_count: number | null;
        }
        Relationships: [];
      }
      daily_page_views: {
        Row: {
          date: string | null;
          path: string | null;
          view_count: number | null;
        }
        Relationships: [];
      }
      user_metrics: {
        Row: {
          job_applications: number | null;
          profile_views: number | null;
          quote_invites: number | null;
          success_rate: number | null;
          user_id: string | null;
        }
        Insert: {
          job_applications?: never;
          profile_views?: never;
          quote_invites?: never;
          success_rate?: never;
          user_id?: string | null;
        }
        Update: {
          job_applications?: never;
          profile_views?: never;
          quote_invites?: never;
          success_rate?: never;
          user_id?: string | null;
        }
        Relationships: [];
      }
    }
    Functions: {
      check_users_needing_reminders: {
        Args: Record<PropertyKey, never>
        Returns: {
          user_id: string
          email: string
          display_name: string
          user_type: string
          last_login: string
          reminder_type: string
          days_since_login: number
          onboarding_status: Json
        }[]    Functions: {;
      check_users_needing_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: {;
          user_id: string;
          email: string;
          display_name: string;
          user_type: string;
          last_login: string;
          reminder_type: string;
          days_since_login: number;
          onboarding_status: Json;
        }[];

      }
      complete_referral: {
        Args: { _referred_id: string, _user_type: string }
        Returns: undefined;
      }
      create_notification: {
        Args: {
          _user_id: string;
          _title: string;
          _message: string;
          _type: string;
          _related_id?: string;
        }
        Returns: string;
      }
      create_scheduled_reminders: {
        Args: Record<PropertyKey, never>
        Returns: undefined      create_scheduled_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: undefined;


        Returns: string
      }
      }
      get_event_distribution: {
        Args: { days_back?: number }
        Returns: {

      schedule_email_reminders: {
        Args: Record<PropertyKey, never>
        Returns: number      schedule_email_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: number;



          date: string
          event_type: string
          count: number
        }[]
      }
      hash_api_key: {
        Args: { api_key: string }
        Returns: string
      }
      schedule_email_reminders: {
        Args: Record<PropertyKey, never>
        Returns: number
      schedule_email_reminders: {;
        Args: Record<PropertyKey never>;
        Returns: number;
      }
      trigger_resume_scoring: {
        Args: { application_id: string }
        Returns: undefined
      }
      update_onboarding_milestone: {
        Args: { _user_id: string, _milestone: string, _status: boolean }
        Returns: undefined
      }
      verify_api_key: {
        Args: { provided_key: string, stored_hash: string }
        Returns: boolean
      }
    }
    Enums: {
      api_key_scope:
        | "jobs:read"
        | "jobs:write"
        | "talent:read"
        | "quotes:write"
        | "webhooks:manage"
      fraud_severity: "safe" | "suspicious" | "dangerous"
      quote_request_status:
        | "new"
        | "in_review"
        | "accepted"
        | "responded"
        | "closed"
        | "archived"
      referral_status: "pending" | "completed" | "expired"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}



type DefaultSchema = Database[Extract<keyof Database, "public">]
export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])

type DefaultSchema = Database[Extract<keyof Database, "public">]
export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema: keyof Database };
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])

  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R;
      : never;
    : never;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database }
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never;
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }


    | keyof DefaultSchema["Tables"]


  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I;
      : never;
    : never;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database }
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never;
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }


    | keyof DefaultSchema["Tables"]


  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      referral_status: ["pending", "completed", "expired"]}}} as const
;
        "jobs:read",
        "jobs:write",
        "talent:read",
        "quotes:write",
        "webhooks:manage"],
      fraud_severity: ["safe", "suspicious", "dangerous"],
      quote_request_status: [
        "new";
        "in_review";
        "accepted";
        "responded";
        "closed";
        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const
;
        "new",
        "in_review",
        "accepted",
        "responded",
        "closed",
        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const
;
type DefaultSchema = Database[Extract<keyof Database, "public">];
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;
      Row: infer R;
    }
    ? R;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;
        DefaultSchema["Views"]);
    ? (DefaultSchema["Tables"] &;
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;
        Row: infer R;
      }
      ? R;
      : never;
    : never;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Insert: infer I;
    }
    ? I;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Insert: infer I;
      }
      ? I;
      : never;
    : never;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema: keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    : never = never> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Update: infer U;
    }
    ? U;
    : never;
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Update: infer U;
      }


      ? U;
      : never;
    : never;
export type Enums<;
  DefaultSchemaEnumNameOrOptions extends;
    | keyof DefaultSchema["Enums"];
    | { schema: keyof Database }
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    : never = never;
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }

    | keyof DefaultSchema["Enums"]


  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never
export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends

    | { schema: keyof Database }
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];
    : never = never;
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }

    | keyof DefaultSchema["CompositeTypes"]


  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      api_key_scope: [;
        "jobs:read";
        "jobs:write";
        "talent:read";
        "quotes:write";
        "webhooks:manage"]
      fraud_severity: ["safe", "suspicious", "dangerous"];
      quote_request_status: [;
        "new";
        "in_review";
        "accepted";
        "responded";
        "closed";
        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const;

;
      api_key_scope: [

        "archived"],
      referral_status: ["pending", "completed", "expired"]}}} as const;
;
      referral_status:"pending" | "completed" | "expired";
    }
    CompositeTypes:{;
      [_ in never]:never;
    }
  }
}
;
type DefaultSchema = Database[Extract<keyof Database, "public">];
;
export type Tables<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"]);
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"]);
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &;
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {;
      Row:infer R;
    }
    ? R;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &;
        DefaultSchema["Views"]);
    ? (DefaultSchema["Tables"] &;
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {;
        Row:infer R;
      }
      ? R;
      :never;
    :never;
;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Insert:infer I;
    }
    ? I;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Insert:infer I;
      }
      ? I;
      :never;
    :never;
;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends;
    | keyof DefaultSchema["Tables"];
    | { schema:keyof Database },;
  TableName extends DefaultSchemaTableNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"];
    :never = never> = DefaultSchemaTableNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {;
      Update:infer U;
    }
    ? U;
    :never;
  :DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"];
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {;
        Update:infer U;
      }
      ? U;
      :never;
    :never;
;
export type Enums<;
  DefaultSchemaEnumNameOrOptions extends;
    | keyof DefaultSchema["Enums"];
    | { schema:keyof Database },;
  EnumName extends DefaultSchemaEnumNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"];
    :never = never> = DefaultSchemaEnumNameOrOptions extends { schema:keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName];
  :DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"];
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions];
    :never;
;
export type CompositeTypes<;
  PublicCompositeTypeNameOrOptions extends;
    | keyof DefaultSchema["CompositeTypes"];
    | { schema:keyof Database },;
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {;
    schema:keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"];
    :never = never> = PublicCompositeTypeNameOrOptions extends { schema:keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName];
  :PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"];
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions];
    :never;
;
export const Constants = {;
  public:{;
    Enums:{;
      api_key_scope:[;
export const Constants = {;
  public: {;
    Enums: {;
      api_key_scope: [;
        "jobs:read",;
        "jobs:write",;
        "talent:read",;
        "quotes:write",;
        "webhooks:manage"],;
      fraud_severity: ["safe", "suspicious", "dangerous"],;
      quote_request_status: [;
        "new",;
        "in_review",;
        "accepted",;
        "responded",;
        "closed",;
        "archived"];
      referral_status: ["pending", "completed", "expired"]}}} as const;
