export type Json =;
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];
export type Database = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  public: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    Tables: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      ai_chats: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          id: string
          message: string
          response: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          message: string
          response: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          message?: string
          response?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "ai_chats_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      analytics_events: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string | null
          event_type: string
          id: string
          metadata: Json | null
          path: string | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          event_type: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          event_type?: string
          id?: string
          metadata?: Json | null
          path?: string | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "analytics_events_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      api_keys: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          key_hash: string
          key_prefix: string
          last_used_at: string | null
          name: string
          scopes: Database["public"]["Enums"]["api_key_scope"][]"
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash: string
          key_prefix: string
          last_used_at?: string | null
          name: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]"
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          key_hash?: string
          key_prefix?: string
          last_used_at?: string | null
          name?: string
          scopes?: Database["public"]["Enums"]["api_key_scope"][]"
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "api_keys_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      api_logs: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
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
  // TODO: Add properties
}
  // TODO: Add properties
}
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
  // TODO: Add properties
}
  // TODO: Add properties
}
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
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "api_logs_api_key_id_fkey""
            columns: ["api_key_id"]"
            isOneToOne: false
            referencedRelation: "api_keys""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "api_logs_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      certifications: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          credential_id: string | null
          credential_url: string | null
          expiration_date: string | null
          id: string
          issue_date: string | null
          issuing_organization: string
          name: string
          resume_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization: string
          name: string
          resume_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          credential_id?: string | null
          credential_url?: string | null
          expiration_date?: string | null
          id?: string
          issue_date?: string | null
          issuing_organization?: string
          name?: string
          resume_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "certifications_resume_id_fkey""
            columns: ["resume_id"]"
            isOneToOne: false
            referencedRelation: "talent_resumes""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      content: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content_type: string
          content_url: string | null
          created_at: string
          creator_id: string
          description: string | null
          id: string
          published: boolean | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          views: number | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content_type: string
          content_url?: string | null
          created_at?: string
          creator_id: string
          description?: string | null
          id?: string
          published?: boolean | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          views?: number | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content_type?: string
          content_url?: string | null
          created_at?: string
          creator_id?: string
          description?: string | null
          id?: string
          published?: boolean | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          views?: number | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "content_creator_id_fkey""
            columns: ["creator_id"]"
            isOneToOne: false
            referencedRelation: "profiles""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      contract_templates: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          id: string
          is_default: boolean | null
          template_data: Json
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          is_default?: boolean | null
          template_data: Json
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          is_default?: boolean | null
          template_data?: Json
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "contract_templates_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      education: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          degree: string
          description: string | null
          end_date: string | null
          field_of_study: string | null
          id: string
          institution: string
          institution_logo_url: string | null
          is_current: boolean
          location: string | null
          resume_id: string
          start_date: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          degree: string
          description?: string | null
          end_date?: string | null
          field_of_study?: string | null
          id?: string
          institution: string
          institution_logo_url?: string | null
          is_current?: boolean
          location?: string | null
          resume_id: string
          start_date: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          degree?: string
          description?: string | null
          end_date?: string | null
          field_of_study?: string | null
          id?: string
          institution?: string
          institution_logo_url?: string | null
          is_current?: boolean
          location?: string | null
          resume_id?: string
          start_date?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "education_resume_id_fkey""
            columns: ["resume_id"]"
            isOneToOne: false
            referencedRelation: "talent_resumes""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      fraud_detection_reports: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken_count: number
          dangerous_count: number
          false_positive_count: number
          generated_at: string
          id: string
          report_data: Json | null
          report_month: string
          suspicious_count: number
          total_flags: number
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken_count?: number
          dangerous_count?: number
          false_positive_count?: number
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_month: string
          suspicious_count?: number
          total_flags?: number
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken_count?: number
          dangerous_count?: number
          false_positive_count?: number
          generated_at?: string
          id?: string
          report_data?: Json | null
          report_month?: string
          suspicious_count?: number
          total_flags?: number
        }
        Relationships: []
      }
      fraud_flags: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken: string | null
          content_excerpt: string
          content_id: string
          content_type: string
          gpt_classification: string | null
          gpt_explanation: string | null
          id: string
          ip_address: string | null
          is_false_positive: boolean | null
          reason: string
          reviewed_at: string | null
          reviewed_by: string | null
          severity: Database["public"]["Enums"]["fraud_severity"]"
          status: string
          timestamp: string
          updated_at: string | null
          user_email: string | null
          user_id: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken?: string | null
          content_excerpt: string
          content_id: string
          content_type: string
          gpt_classification?: string | null
          gpt_explanation?: string | null
          id?: string
          ip_address?: string | null
          is_false_positive?: boolean | null
          reason: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["fraud_severity"]"
          status?: string
          timestamp?: string
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action_taken?: string | null
          content_excerpt?: string
          content_id?: string
          content_type?: string
          gpt_classification?: string | null
          gpt_explanation?: string | null
          id?: string
          ip_address?: string | null
          is_false_positive?: boolean | null
          reason?: string
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: Database["public"]["Enums"]["fraud_severity"]"
          status?: string
          timestamp?: string
          updated_at?: string | null
          user_email?: string | null
          user_id?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "fraud_flags_reviewed_by_fkey""
            columns: ["reviewed_by"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "fraud_flags_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      hire_requests: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          attachments: Json | null
          budget_display: string | null
          budget_max: number | null
          budget_min: number | null
          created_at: string
          expiry_date: string | null
          id: string
          project_overview: string
          project_summary: string | null
          project_type: string | null
          requester_email: string
          requester_id: string | null
          requester_name: string
          status: string
          talent_id: string
          timeline: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          attachments?: Json | null
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          project_overview: string
          project_summary?: string | null
          project_type?: string | null
          requester_email: string
          requester_id?: string | null
          requester_name: string
          status?: string
          talent_id: string
          timeline: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          attachments?: Json | null
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          expiry_date?: string | null
          id?: string
          project_overview?: string
          project_summary?: string | null
          project_type?: string | null
          requester_email?: string
          requester_id?: string | null
          requester_name?: string
          status?: string
          talent_id?: string
          timeline?: string
          updated_at?: string
        }
        Relationships: []
      }
      interviews: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          client_id: string
          created_at: string
          duration_minutes: number
          end_time: string | null
          id: string
          interview_type: string
          meeting_link: string | null
          meeting_platform: string | null
          notes: string | null
          reminder_sent: string | null
          scheduled_date: string
          status: string
          talent_id: string
          title: string | null
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          client_id: string
          created_at?: string
          duration_minutes?: number
          end_time?: string | null
          id?: string
          interview_type?: string
          meeting_link?: string | null
          meeting_platform?: string | null
          notes?: string | null
          reminder_sent?: string | null
          scheduled_date: string
          status?: string
          talent_id: string
          title?: string | null
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          client_id?: string
          created_at?: string
          duration_minutes?: number
          end_time?: string | null
          id?: string
          interview_type?: string
          meeting_link?: string | null
          meeting_platform?: string | null
          notes?: string | null
          reminder_sent?: string | null
          scheduled_date?: string
          status?: string
          talent_id?: string
          title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      job_applications: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          cover_letter: string | null
          created_at: string | null
          id: string
          is_shortlisted: boolean | null
          job_id: string
          match_breakdown: Json | null
          match_score: number | null
          match_suggestion: string | null
          match_summary: string | null
          resume_id: string | null
          scored_at: string | null
          status: string
          talent_id: string
          viewed_at: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          cover_letter?: string | null
          created_at?: string | null
          id?: string
          is_shortlisted?: boolean | null
          job_id: string
          match_breakdown?: Json | null
          match_score?: number | null
          match_suggestion?: string | null
          match_summary?: string | null
          resume_id?: string | null
          scored_at?: string | null
          status?: string
          talent_id: string
          viewed_at?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          cover_letter?: string | null
          created_at?: string | null
          id?: string
          is_shortlisted?: boolean | null
          job_id?: string
          match_breakdown?: Json | null
          match_score?: number | null
          match_suggestion?: string | null
          match_summary?: string | null
          resume_id?: string | null
          scored_at?: string | null
          status?: string
          talent_id?: string
          viewed_at?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "job_applications_job_id_fkey""
            columns: ["job_id"]"
            isOneToOne: false
            referencedRelation: "jobs""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "job_applications_resume_id_fkey""
            columns: ["resume_id"]"
            isOneToOne: false
            referencedRelation: "talent_resumes""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "job_applications_talent_id_fkey""
            columns: ["talent_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      jobs: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget: Json
          category: string
          client_id: string
          created_at: string
          deadline: string | null
          description: string
          id: string
          skills: string[]
          status: string
          title: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget?: Json
          category: string
          client_id: string
          created_at?: string
          deadline?: string | null
          description: string
          id?: string
          skills?: string[]
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget?: Json
          category?: string
          client_id?: string
          created_at?: string
          deadline?: string | null
          description?: string
          id?: string
          skills?: string[]
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "jobs_client_id_fkey""
            columns: ["client_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      milestone_activities: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action: string
          comment: string | null
          created_at: string
          id: string
          milestone_id: string
          new_status: string
          previous_status: string | null
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action: string
          comment?: string | null
          created_at?: string
          id?: string
          milestone_id: string
          new_status: string
          previous_status?: string | null
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          action?: string
          comment?: string | null
          created_at?: string
          id?: string
          milestone_id?: string
          new_status?: string
          previous_status?: string | null
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "milestone_activities_milestone_id_fkey""
            columns: ["milestone_id"]"
            isOneToOne: false
            referencedRelation: "project_milestones""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "milestone_activities_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      notification_preferences: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          id: string
          marketing_emails: boolean | null
          system_notifications: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          marketing_emails?: boolean | null
          system_notifications?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          marketing_emails?: boolean | null
          system_notifications?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "notification_preferences_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: true
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      notifications: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string | null
          id: string
          message: string
          read: boolean | null
          related_id: string | null
          title: string
          type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          id?: string
          message: string
          read?: boolean | null
          related_id?: string | null
          title: string
          type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          id?: string
          message?: string
          read?: boolean | null
          related_id?: string | null
          title?: string
          type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "notifications_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      partner_payouts: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount: number
          completed_at: string | null
          created_at: string
          id: string
          method: string
          partner_id: string
          payout_details: Json | null
          status: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount: number
          completed_at?: string | null
          created_at?: string
          id?: string
          method: string
          partner_id: string
          payout_details?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount?: number
          completed_at?: string | null
          created_at?: string
          id?: string
          method?: string
          partner_id?: string
          payout_details?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "partner_payouts_partner_id_fkey""
            columns: ["partner_id"]"
            isOneToOne: false
            referencedRelation: "partner_profiles""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      partner_profiles: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          audience_size: string
          bio: string
          commission_rate: number | null
          created_at: string
          fraud_flags: number | null
          id: string
          name: string
          niche: string
          payout_method: string
          social_media: Json | null
          status: string
          updated_at: string
          user_id: string
          website: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          audience_size: string
          bio: string
          commission_rate?: number | null
          created_at?: string
          fraud_flags?: number | null
          id?: string
          name: string
          niche: string
          payout_method: string
          social_media?: Json | null
          status?: string
          updated_at?: string
          user_id: string
          website?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          audience_size?: string
          bio?: string
          commission_rate?: number | null
          created_at?: string
          fraud_flags?: number | null
          id?: string
          name?: string
          niche?: string
          payout_method?: string
          social_media?: Json | null
          status?: string
          updated_at?: string
          user_id?: string
          website?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "partner_profiles_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      partner_referral_links: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          campaign: string | null
          clicks: number | null
          conversions: number | null
          created_at: string
          id: string
          name: string
          partner_id: string
          source: string | null
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          campaign?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string
          id?: string
          name: string
          partner_id: string
          source?: string | null
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          campaign?: string | null
          clicks?: number | null
          conversions?: number | null
          created_at?: string
          id?: string
          name?: string
          partner_id?: string
          source?: string | null
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "partner_referral_links_partner_id_fkey""
            columns: ["partner_id"]"
            isOneToOne: false
            referencedRelation: "partner_profiles""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      portfolio_projects: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          demo_url: string | null
          description: string | null
          github_url: string | null
          id: string
          image_url: string | null
          pdf_url: string | null
          technologies: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          pdf_url?: string | null
          technologies?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          demo_url?: string | null
          description?: string | null
          github_url?: string | null
          id?: string
          image_url?: string | null
          pdf_url?: string | null
          technologies?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "portfolio_projects_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      profiles: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          avatar_url: string | null
          average_rating: number | null
          bio: string | null
          created_at: string
          display_name: string | null
          headline: string | null
          id: string
          ip_address: string | null
          last_login_ip: string | null
          profile_complete: boolean
          rating_count: number | null
          rating_sum: number | null
          role: string | null
          signup_timestamp: string | null
          tenant_id: string | null
          updated_at: string
          user_type: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          headline?: string | null
          id: string
          ip_address?: string | null
          last_login_ip?: string | null
          profile_complete?: boolean
          rating_count?: number | null
          rating_sum?: number | null
          role?: string | null
          signup_timestamp?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_type?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          avatar_url?: string | null
          average_rating?: number | null
          bio?: string | null
          created_at?: string
          display_name?: string | null
          headline?: string | null
          id?: string
          ip_address?: string | null
          last_login_ip?: string | null
          profile_complete?: boolean
          rating_count?: number | null
          rating_sum?: number | null
          role?: string | null
          signup_timestamp?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_type?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "profiles_id_fkey""
            columns: ["id"]"
            isOneToOne: true
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "profiles_tenant_id_fkey""
            columns: ["tenant_id"]"
            isOneToOne: false
            referencedRelation: "whitelabel_tenants""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      project_milestones: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount: number
          created_at: string
          created_by: string
          deliverables: Json | null
          description: string | null
          due_date: string | null
          id: string
          project_id: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount: number
          created_at?: string
          created_by: string
          deliverables?: Json | null
          description?: string | null
          due_date?: string | null
          id?: string
          project_id: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount?: number
          created_at?: string
          created_by?: string
          deliverables?: Json | null
          description?: string | null
          due_date?: string | null
          id?: string
          project_id?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "project_milestones_created_by_fkey""
            columns: ["created_by"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "project_milestones_project_id_fkey""
            columns: ["project_id"]"
            isOneToOne: false
            referencedRelation: "projects""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      project_notes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content: string
          created_at: string
          id: string
          project_id: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content: string
          created_at?: string
          id?: string
          project_id: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          content?: string
          created_at?: string
          id?: string
          project_id?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "project_notes_project_id_fkey""
            columns: ["project_id"]"
            isOneToOne: false
            referencedRelation: "projects""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "project_notes_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      projects: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          agreement_url: string | null
          client_id: string
          created_at: string
          id: string
          job_id: string
          payment_terms: string
          scope_summary: string
          start_date: string
          status: string
          talent_id: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          agreement_url?: string | null
          client_id: string
          created_at?: string
          id?: string
          job_id: string
          payment_terms: string
          scope_summary: string
          start_date: string
          status?: string
          talent_id: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          agreement_url?: string | null
          client_id?: string
          created_at?: string
          id?: string
          job_id?: string
          payment_terms?: string
          scope_summary?: string
          start_date?: string
          status?: string
          talent_id?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "projects_client_id_fkey""
            columns: ["client_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "projects_job_id_fkey""
            columns: ["job_id"]"
            isOneToOne: false
            referencedRelation: "jobs""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "projects_talent_id_fkey""
            columns: ["talent_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      quote_requests: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget_display: string | null
          budget_max: number | null
          budget_min: number | null
          created_at: string
          id: string
          is_archived: boolean
          project_description: string | null
          project_name: string
          project_summary: string
          replied_at: string | null
          requester_email: string
          requester_id: string | null
          requester_name: string
          start_date: string | null
          status: Database["public"]["Enums"]["quote_request_status"]"
          talent_id: string | null
          timeline: string
          updated_at: string
          viewed_at: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          id?: string
          is_archived?: boolean
          project_description?: string | null
          project_name: string
          project_summary: string
          replied_at?: string | null
          requester_email: string
          requester_id?: string | null
          requester_name: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["quote_request_status"]"
          talent_id?: string | null
          timeline: string
          updated_at?: string
          viewed_at?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          budget_display?: string | null
          budget_max?: number | null
          budget_min?: number | null
          created_at?: string
          id?: string
          is_archived?: boolean
          project_description?: string | null
          project_name?: string
          project_summary?: string
          replied_at?: string | null
          requester_email?: string
          requester_id?: string | null
          requester_name?: string
          start_date?: string | null
          status?: Database["public"]["Enums"]["quote_request_status"]"
          talent_id?: string | null
          timeline?: string
          updated_at?: string
          viewed_at?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "quote_requests_requester_id_fkey""
            columns: ["requester_id"]"
            isOneToOne: false
            referencedRelation: "profiles""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "quote_requests_talent_id_fkey""
            columns: ["talent_id"]"
            isOneToOne: false
            referencedRelation: "profiles""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      referral_codes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          code: string
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          code: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          code?: string
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referral_codes_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: true
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      referral_rewards: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount: number | null
          created_at: string
          expires_at: string | null
          id: string
          partner_id: string | null
          referral_id: string
          reward_type: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount?: number | null
          created_at?: string
          expires_at?: string | null
          id?: string
          partner_id?: string | null
          referral_id: string
          reward_type: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          amount?: number | null
          created_at?: string
          expires_at?: string | null
          id?: string
          partner_id?: string | null
          referral_id?: string
          reward_type?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referral_rewards_partner_id_fkey""
            columns: ["partner_id"]"
            isOneToOne: false
            referencedRelation: "partner_profiles""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referral_rewards_referral_id_fkey""
            columns: ["referral_id"]"
            isOneToOne: false
            referencedRelation: "referrals""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referral_rewards_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      referrals: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at: string | null
          created_at: string
          email: string | null
          id: string
          ip_address: string | null
          partner_id: string | null
          referral_code: string
          referred_id: string | null
          referred_user_type: string | null
          referrer_id: string
          referrer_user_type: string | null
          reward_issued: boolean
          reward_issued_at: string | null
          status: Database["public"]["Enums"]["referral_status"]"
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          partner_id?: string | null
          referral_code: string
          referred_id?: string | null
          referred_user_type?: string | null
          referrer_id: string
          referrer_user_type?: string | null
          reward_issued?: boolean
          reward_issued_at?: string | null
          status?: Database["public"]["Enums"]["referral_status"]"
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at?: string | null
          created_at?: string
          email?: string | null
          id?: string
          ip_address?: string | null
          partner_id?: string | null
          referral_code?: string
          referred_id?: string | null
          referred_user_type?: string | null
          referrer_id?: string
          referrer_user_type?: string | null
          reward_issued?: boolean
          reward_issued_at?: string | null
          status?: Database["public"]["Enums"]["referral_status"]"
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referrals_partner_id_fkey""
            columns: ["partner_id"]"
            isOneToOne: false
            referencedRelation: "partner_profiles""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referrals_referral_code_fkey""
            columns: ["referral_code"]"
            isOneToOne: false
            referencedRelation: "referral_codes""
            referencedColumns: ["code"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referrals_referred_id_fkey""
            columns: ["referred_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "referrals_referrer_id_fkey""
            columns: ["referrer_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      reminder_logs: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          clicked_at: string | null
          email_body: string
          email_subject: string
          id: string
          opened_at: string | null
          reminder_type: string
          sent_at: string | null
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          clicked_at?: string | null
          email_body: string
          email_subject: string
          id?: string
          opened_at?: string | null
          reminder_type: string
          sent_at?: string | null
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          clicked_at?: string | null
          email_body?: string
          email_subject?: string
          id?: string
          opened_at?: string | null
          reminder_type?: string
          sent_at?: string | null
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "reminder_logs_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      resume_skills: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          category: string | null
          created_at: string
          id: string
          name: string
          proficiency: number | null
          resume_id: string
          years_experience: number | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          category?: string | null
          created_at?: string
          id?: string
          name: string
          proficiency?: number | null
          resume_id: string
          years_experience?: number | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          category?: string | null
          created_at?: string
          id?: string
          name?: string
          proficiency?: number | null
          resume_id?: string
          years_experience?: number | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "resume_skills_resume_id_fkey""
            columns: ["resume_id"]"
            isOneToOne: false
            referencedRelation: "talent_resumes""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      review_reports: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          id: string
          reason: string
          reporter_id: string
          resolved_at: string | null
          review_id: string
          status: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          reason: string
          reporter_id: string
          resolved_at?: string | null
          review_id: string
          status?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          id?: string
          reason?: string
          reporter_id?: string
          resolved_at?: string | null
          review_id?: string
          status?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "review_reports_reporter_id_fkey""
            columns: ["reporter_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "review_reports_review_id_fkey""
            columns: ["review_id"]"
            isOneToOne: false
            referencedRelation: "reviews""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
      reviews: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          communication_rating: number | null
          created_at: string
          id: string
          is_anonymous: boolean
          is_visible: boolean
          project_id: string
          quality_rating: number | null
          rating: number
          report_count: number
          review_text: string
          reviewee_id: string
          reviewer_id: string
          status: string
          timeliness_rating: number | null
          updated_at: string
          would_work_again: boolean | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          communication_rating?: number | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          is_visible?: boolean
          project_id: string
          quality_rating?: number | null
          rating: number
          report_count?: number
          review_text: string
          reviewee_id: string
          reviewer_id: string
          status?: string
          timeliness_rating?: number | null
          updated_at?: string
          would_work_again?: boolean | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          communication_rating?: number | null
          created_at?: string
          id?: string
          is_anonymous?: boolean
          is_visible?: boolean
          project_id?: string
          quality_rating?: number | null
          rating?: number
          report_count?: number
          review_text?: string
          reviewee_id?: string
          reviewer_id?: string
          status?: string
          timeliness_rating?: number | null
          updated_at?: string
          would_work_again?: boolean | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "reviews_project_id_fkey""
            columns: ["project_id"]"
            isOneToOne: false
            referencedRelation: "projects""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "reviews_reviewee_id_fkey""
            columns: ["reviewee_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "reviews_reviewer_id_fkey""
            columns: ["reviewer_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      scheduled_jobs: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at: string | null
          created_at: string
          id: string
          job_type: string
          payload: Json | null
          scheduled_for: string
          status: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at?: string | null
          created_at?: string
          id?: string
          job_type: string
          payload?: Json | null
          scheduled_for: string
          status: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          completed_at?: string | null
          created_at?: string
          id?: string
          job_type?: string
          payload?: Json | null
          scheduled_for?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      subscriptions: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan_type: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type: string
          status: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan_type?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "subscriptions_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      talent_resumes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          headline: string | null
          id: string
          is_active: boolean
          summary: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          headline?: string | null
          id?: string
          is_active?: boolean
          summary?: string | null
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          headline?: string | null
          id?: string
          is_active?: boolean
          summary?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "talent_resumes_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      tenant_administrators: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string | null
          id: string
          tenant_id: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          id?: string
          tenant_id: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string | null
          id?: string
          tenant_id?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "tenant_administrators_tenant_id_fkey""
            columns: ["tenant_id"]"
            isOneToOne: false
            referencedRelation: "whitelabel_tenants""
            referencedColumns: ["id"]"
          },
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "tenant_administrators_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      user_onboarding: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          application_sent: boolean | null
          application_sent_at: string | null
          availability_set: boolean | null
          availability_set_at: string | null
          created_at: string
          id: string
          job_posted: boolean | null
          job_posted_at: string | null
          last_reminder_sent: string | null
          match_received: boolean | null
          match_received_at: string | null
          match_viewed: boolean | null
          match_viewed_at: string | null
          profile_completed: boolean | null
          profile_completed_at: string | null
          quote_received: boolean | null
          quote_received_at: string | null
          reminder_count: number | null
          role: string
          skills_added: boolean | null
          skills_added_at: string | null
          talent_invited: boolean | null
          talent_invited_at: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          application_sent?: boolean | null
          application_sent_at?: string | null
          availability_set?: boolean | null
          availability_set_at?: string | null
          created_at?: string
          id?: string
          job_posted?: boolean | null
          job_posted_at?: string | null
          last_reminder_sent?: string | null
          match_received?: boolean | null
          match_received_at?: string | null
          match_viewed?: boolean | null
          match_viewed_at?: string | null
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          quote_received?: boolean | null
          quote_received_at?: string | null
          reminder_count?: number | null
          role: string
          skills_added?: boolean | null
          skills_added_at?: string | null
          talent_invited?: boolean | null
          talent_invited_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          application_sent?: boolean | null
          application_sent_at?: string | null
          availability_set?: boolean | null
          availability_set_at?: string | null
          created_at?: string
          id?: string
          job_posted?: boolean | null
          job_posted_at?: string | null
          last_reminder_sent?: string | null
          match_received?: boolean | null
          match_received_at?: string | null
          match_viewed?: boolean | null
          match_viewed_at?: string | null
          profile_completed?: boolean | null
          profile_completed_at?: string | null
          quote_received?: boolean | null
          quote_received_at?: string | null
          reminder_count?: number | null
          role?: string
          skills_added?: boolean | null
          skills_added_at?: string | null
          talent_invited?: boolean | null
          talent_invited_at?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "user_onboarding_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      user_privacy_settings: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          activity_monitoring_enabled: boolean | null
          ai_analysis_enabled: boolean | null
          id: string
          message_scanning_enabled: boolean | null
          updated_at: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          activity_monitoring_enabled?: boolean | null
          ai_analysis_enabled?: boolean | null
          id: string
          message_scanning_enabled?: boolean | null
          updated_at?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          activity_monitoring_enabled?: boolean | null
          ai_analysis_enabled?: boolean | null
          id?: string
          message_scanning_enabled?: boolean | null
          updated_at?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "user_privacy_settings_id_fkey""
            columns: ["id"]"
            isOneToOne: true
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      webhook_configs: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at: string
          event_types: string[]
          id: string
          is_active: boolean
          last_triggered_at: string | null
          name: string
          secret: string | null
          updated_at: string
          url: string
          user_id: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          event_types: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name: string
          secret?: string | null
          updated_at?: string
          url: string
          user_id: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          created_at?: string
          event_types?: string[]
          id?: string
          is_active?: boolean
          last_triggered_at?: string | null
          name?: string
          secret?: string | null
          updated_at?: string
          url?: string
          user_id?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "webhook_configs_user_id_fkey""
            columns: ["user_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      whitelabel_tenants: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          account_manager_id: string | null
          brand_name: string
          created_at: string | null
          custom_domain: string | null
          dns_verified: boolean
          email_template_override: Json | null
          id: string
          is_active: boolean
          landing_page_copy: Json | null
          logo_url: string | null
          primary_color: string
          subdomain: string
          theme_preset: string
          updated_at: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          account_manager_id?: string | null
          brand_name: string
          created_at?: string | null
          custom_domain?: string | null
          dns_verified?: boolean
          email_template_override?: Json | null
          id?: string
          is_active?: boolean
          landing_page_copy?: Json | null
          logo_url?: string | null
          primary_color?: string
          subdomain: string
          theme_preset?: string
          updated_at?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          account_manager_id?: string | null
          brand_name?: string
          created_at?: string | null
          custom_domain?: string | null
          dns_verified?: boolean
          email_template_override?: Json | null
          id?: string
          is_active?: boolean
          landing_page_copy?: Json | null
          logo_url?: string | null
          primary_color?: string
          subdomain?: string
          theme_preset?: string
          updated_at?: string | null
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "whitelabel_tenants_account_manager_id_fkey""
            columns: ["account_manager_id"]"
            isOneToOne: false
            referencedRelation: "user_metrics""
            referencedColumns: ["user_id"]"
          }]
          },
        ]
      }
      work_history: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          company_logo_url: string | null
          company_name: string
          created_at: string
          description: string | null
          end_date: string | null
          id: string
          is_current: boolean
          location: string | null
          resume_id: string
          role_title: string
          start_date: string
          updated_at: string
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          company_logo_url?: string | null
          company_name: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean
          location?: string | null
          resume_id: string
          role_title: string
          start_date: string
          updated_at?: string
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          company_logo_url?: string | null
          company_name?: string
          created_at?: string
          description?: string | null
          end_date?: string | null
          id?: string
          is_current?: boolean
          location?: string | null
          resume_id?: string
          role_title?: string
          start_date?: string
          updated_at?: string
        }
        Relationships: [
  // TODO: Add items
]
  // TODO: Add items
]
          {
  // TODO: Add properties
}
  // TODO: Add properties
}
            foreignKeyName: "work_history_resume_id_fkey""
            columns: ["resume_id"]"
            isOneToOne: false
            referencedRelation: "talent_resumes""
            referencedColumns: ["id"]"
          }]
          },
        ]
      }
    }
    Views: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      conversion_rates: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          conversion_count: number | null
          conversion_rate: number | null
          conversion_type: string | null
          date: string | null
          view_count: number | null
        }
        Relationships: []
      }
      daily_page_views: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          date: string | null
          path: string | null
          view_count: number | null
        }
        Relationships: []
      }
      user_metrics: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Row: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          job_applications: number | null
          profile_views: number | null
          quote_invites: number | null
          success_rate: number | null
          user_id: string | null
        }
        Insert: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          job_applications?: never
          profile_views?: never
          quote_invites?: never
          success_rate?: never
          user_id?: string | null
        }
        Update: {
  // TODO: Add properties
}
  // TODO: Add properties
}
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
  // TODO: Add properties
}
  // TODO: Add properties
}
      check_users_needing_reminders: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: Record<PropertyKey, never>
        Returns: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          user_id: string
          email: string
          display_name: string
          user_type: string
          last_login: string
          reminder_type: string
          days_since_login: number
          onboarding_status: Json
        }[]
      }
      complete_referral: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { _referred_id: string; _user_type: string }
        Returns: undefined
      }
      create_notification: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          _user_id: string
          _title: string
          _message: string
          _type: string
          _related_id?: string
        }
        Returns: string
      }
      create_scheduled_reminders: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      flag_suspicious_content: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          p_user_id: string
          p_user_email: string
          p_content_type: string
          p_content_id: string
          p_content_excerpt: string
          p_severity: string
          p_reason: string
          p_ip_address: string
        }
        Returns: string
      }
      generate_api_key: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { prefix: string }
        Returns: string
      }
      generate_fraud_report: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { year: number; month: number }
        Returns: string
      }
      generate_referral_code: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { user_id: string }
        Returns: string
      }
      get_api_key_user_id: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { key_prefix: string; provided_key: string }
        Returns: string
      }
      get_current_tenant_id: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: Record<PropertyKey, never>
        Returns: string
      }
      get_event_distribution: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { days_back?: number }
        Returns: {
  // TODO: Add properties
}
  // TODO: Add properties
}
          date: string
          event_type: string
          count: number
        }[]
      }
      hash_api_key: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { api_key: string }
        Returns: string
      }
      schedule_email_reminders: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: Record<PropertyKey, never>
        Returns: number
      }
      trigger_resume_scoring: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { application_id: string }
        Returns: undefined
      }
      update_onboarding_milestone: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { _user_id: string; _milestone: string; _status: boolean }
        Returns: undefined
      }
      verify_api_key: {
  // TODO: Add properties
}
  // TODO: Add properties
}
        Args: { provided_key: string; stored_hash: string }
        Returns: boolean
      }
    }
    Enums: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      api_key_scope:
        | "jobs:read""
        | "jobs:write""
        | "talent:read""
        | "quotes:write""
        | "webhooks:manage""
      fraud_severity: "safe" | "suspicious" | "dangerous""
      quote_request_status:
        | "new""
        | "in_review""
        | "accepted""
        | "responded""
        | "closed""
        | "archived""
      referral_status: "pending" | "completed" | "expired""
    }
    CompositeTypes: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      [_ in never]: never
    }
  }
}
type DefaultSchema = Database[Extract<keyof Database, "public">];";
export type Tables<;
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])"
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
  // TODO: Add properties
}
  // TODO: Add properties
}
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &"
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])"
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &"
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {"
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &"
        DefaultSchema["Views"])"
    ? (DefaultSchema["Tables"] &"
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {"
        Row: infer R
      }
      ? R
      : never
    : never;
export type TablesInsert<;
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]"
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
  // TODO: Add properties
}
  // TODO: Add properties
}
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]"
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {"
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]"
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {"
        Insert: infer I
      }
      ? I
      : never
    : never;
export type TablesUpdate<;
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]"
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
  // TODO: Add properties
}
  // TODO: Add properties
}
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]"
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {"
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]"
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {"
        Update: infer U
      }
      ? U
      : never
    : never;
export type Enums<;
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]"
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
  // TODO: Add properties
}
  // TODO: Add properties
}
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]"
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]"
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]"
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]"
    : never;
export type CompositeTypes<;
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]"
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
  // TODO: Add properties
}
  // TODO: Add properties
}
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]"
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]"
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]"
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]"
    : never;
export const Constants = {
  // TODO: Add properties
}
  // TODO: Add properties
}
  public: {
  // TODO: Add properties
}
  // TODO: Add properties
}
    Enums: {
  // TODO: Add properties
}
  // TODO: Add properties
}
      api_key_scope: [
  // TODO: Add items
]
  // TODO: Add items
]
        "jobs:read","
        "jobs:write","
        "talent:read","
        "quotes:write","
        "webhooks:manage"],"
        "webhooks:manage","
      ],
      fraud_severity: ["safe", "suspicious", "dangerous"],"
      quote_request_status: [
  // TODO: Add items
]
  // TODO: Add items
]
        "new","
        "in_review","
        "accepted","
        "responded","
        "closed","
        "archived"],"
      referral_status: ["pending", "completed", "expired"]}}} as const"
        "archived","
      ],
      referral_status: ["pending", "completed", "expired"],"
    },
  },
} as const
